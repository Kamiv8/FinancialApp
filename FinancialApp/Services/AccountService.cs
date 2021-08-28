using AutoMapper;
using Database.DataAccess;
using Database.Entities;
using FinancialApp.Exceptions;
using FinancialApp.ModelsDto;
using FinancialApp.ModelsDTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace FinancialApp.Services
{
    public interface IAccountService
    {
        void RegisterAccount(RegisterDto dto);
        TokenDto Login(LoginDto dto);
        ReturnUserDto GetUserData();
        void AddUsername(ChangeUsernameDto dto);
        void ChangePassword(ChangePasswordDto dto);
        void DeleteAccount();
    }
    public class AccountService : IAccountService
    {
        private readonly FinContext _context;
        private readonly IPasswordHasher<User> passwordHasher;
        private readonly AuthenticationSettings settings;
        private readonly IUserContextService userContextService;
        private readonly IMapper _mapper;

        public BinaryReader ClimeTypes { get; private set; }
        public AccountService(FinContext finContext,
            IPasswordHasher<User> passwordHasher,
            AuthenticationSettings settings,
            IUserContextService userContextService,
            IMapper mapper
            )
        {
            _context = finContext;
            this.passwordHasher = passwordHasher;
            this.settings = settings;
            this.userContextService = userContextService;
            _mapper = mapper;
        }
        public void RegisterAccount(RegisterDto dto)
        {
            if (_context.Users.FirstOrDefault(x => x.Email == dto.Email) == null)
            {


                if (dto.Password == dto.ConfimPassword)
                {
                    User user = new User()
                    {
                        Email = dto.Email,

                    };
                    string hashedPassword = passwordHasher.HashPassword(user, dto.Password);
                    user.Password = hashedPassword;
                    _context.Add(user);
                    _context.SaveChanges();
                }
                else
                {
                    throw new BadRequestException("Your data are not correct");
                }
            }
            else
            {
                throw new BadRequestException("This email is busy");
            }
        }
        public TokenDto Login(LoginDto dto)
        {
            string issuer = "http://FinancialApi.com";
            User user = _context.Users
                .Include(u => u.Role)
                .FirstOrDefault(x => x.Email == dto.Email);
            if (user == null)
            {
                throw new NotFoundException("Login or password is not correct");
            }

            var result = passwordHasher.VerifyHashedPassword(user, user.Password, dto.Password);
            if (result == 0)
            {
                throw new BadRequestException("Password is not correct");
            }

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name,$"{user.Username}"),
                new Claim(ClaimTypes.Role, user.Role == null ? string.Empty : user.Role.Name.ToString()),
                new Claim("Group", user.GroupId == null ? string.Empty : user.GroupId.ToString() )
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("PRIVATE_KEY_DONT_SHARE"));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddMinutes(15);
            var token = new JwtSecurityToken(issuer, issuer, claims, expires: expires, signingCredentials: cred);
            var tokenHandler = new JwtSecurityTokenHandler();

            return new TokenDto() { Token = tokenHandler.WriteToken(token) };

        }

        public ReturnUserDto GetUserData()
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == userContextService.GetUserId);

            return _mapper.Map<ReturnUserDto>(user);
        }

        public void AddUsername(ChangeUsernameDto dto)
        {
            int? id = userContextService.GetUserId;
            User user = _context.Users.FirstOrDefault(x => x.Id == id);
            user.Username = dto.NewUsername;
            _context.Update(user);
            _context.SaveChanges();
        }
        public void ChangePassword(ChangePasswordDto dto)
        {
            int? id = userContextService.GetUserId;
            if (dto.NewPassword == dto.ConnfimNewPassword)
            {
                User user = _context.Users.FirstOrDefault(x => x.Id == id);
                if (passwordHasher.VerifyHashedPassword(user, user.Password, dto.OldPassword).Equals(1))
                {
                    string newPassword = passwordHasher.HashPassword(user, dto.NewPassword);
                    user.Password = newPassword;
                    _context.Update(user);
                    _context.SaveChanges();
                }
            }
            else
            {
                throw new BadRequestException("Confim password is not equal to password");
            }
        }
        public void DeleteAccount()
        {
            int? id = userContextService.GetUserId;
            _context.Users.Remove(_context.Users.Find(id));
            _context.SaveChanges();

        }

    }
}
