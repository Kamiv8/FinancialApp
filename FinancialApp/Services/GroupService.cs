using AutoMapper;
using Database.DataAccess;
using Database.Entities;
using FinancialApp.Exceptions;
using FinancialApp.ModelsDto;
using FinancialApp.ModelsDTO;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;

namespace FinancialApp.Services
{

    public interface IGroupService
    {
        void Create(GroupDto dto);
        void AddUser(AddUserDto dto);
        void DeleteGroup();
        void ChangePassword(ChangePasswordDto dto);
        IEnumerable<ReturnUserDto> GetAllUsers();
        void DeleteMember(int id);
        void LeaveGroup();
        void ChangeRole(ChangeRoleDto dto);
        void ChangeName(ChangeGroupNameDto dto);
    }
    public class GroupService : IGroupService
    {
        private readonly FinContext _context;
        private readonly IPasswordHasher<Group> _passwordHasher;
        private readonly IUserContextService _userContext;
        private readonly IMapper _mapper;

        public GroupService(FinContext context, IPasswordHasher<Group> passwordHasher, IUserContextService userContext, IMapper mapper)
        {
            _context = context;
            _passwordHasher = passwordHasher;
            _userContext = userContext;
            _mapper = mapper;
        }
        // Create Group
        public void Create(GroupDto dto)
        {
            if (_context.Groups.FirstOrDefault(x => x.Name == dto.Name) is null)
            {
                if (_userContext.GetRoleName == string.Empty)
                {
                    Group group = new Group()
                    {
                        Name = dto.Name,
                        MaxMember = dto.MaxMember
                    };
                    var hashedPassword = _passwordHasher.HashPassword(group, dto.Password);
                    group.Password = hashedPassword;

                    _context.Groups.Add(group);
                    _context.SaveChanges();
                    var createdGroup = _context.Groups.FirstOrDefault(x => x.Name == dto.Name);


                    var user = _context.Users.FirstOrDefault(x => x.Id == _userContext.GetUserId);
                    user.RoleId = 1;
                    user.GroupId = group.Id;
                    _context.Users.Update(user);

                    _context.SaveChanges();
                }
                else
                {
                    throw new BadRequestException("You are in another group");
                }
            }
            else
            {
                throw new BadRequestException("This name is taken");
            }
        }
        // Delete Group
        public void DeleteGroup()
        {
            var group = _context.Groups.FirstOrDefault(x => x.Id == _userContext.GetGroupId);
            _context.Remove(group);

            var users = _context.Users.Where(x => x.GroupId == group.Id).ToList();

            foreach (var item in users)
            {
                item.GroupId = null;
                item.RoleId = null;

            }
            _context.Users.UpdateRange(users);
            var operations = _context.GroupOperation.Where(x => x.GroupId == group.Id).ToList();
            _context.RemoveRange(operations);
            _context.SaveChanges();
        }

        // Change password 

        public void ChangePassword(ChangePasswordDto dto)
        {
            var group = _context.Groups.FirstOrDefault(x => x.Id == _userContext.GetGroupId);

            if (dto.ConnfimNewPassword == dto.NewPassword)
            {
                if (_passwordHasher.VerifyHashedPassword(group, group.Password, dto.NewPassword).Equals(1))
                {
                    var hashedPassword = _passwordHasher.HashPassword(group, dto.NewPassword);

                    Group newGroup = new Group()
                    {
                        Password = hashedPassword
                    };
                    _context.Groups.Update(newGroup);
                    _context.SaveChanges();
                }
            }
        }
        // Add to group
        public void AddUser(AddUserDto dto)
        {
            var group = _context.Groups.FirstOrDefault(x => x.Name == dto.GroupName);
            if (group != null)
            {
                int memberInGroup = _context.Users.Where(x => x.GroupId == group.Id).Count();

                if (memberInGroup < group.MaxMember)
                {
                    var veryfyPassword = _passwordHasher.VerifyHashedPassword(group, group.Password, dto.Password);

                    if (veryfyPassword.Equals(0))
                    {
                        throw new BadRequestException("Password is not correct");
                    }

                    User user = _context.Users.FirstOrDefault(x => x.Id == _userContext.GetUserId);
                    user.GroupId = group.Id;
                    user.RoleId = 2;
                    _context.Users.Update(user);
                    _context.SaveChanges();
                }
                else
                {
                    throw new BadRequestException("This group is full");
                }
            }
            else
            {

                throw new NotFoundException("This name group is not correct");
            }


        }

        // Get All member

        public IEnumerable<ReturnUserDto> GetAllUsers()
        {
            var users = _context.Users.Where(x => x.GroupId == _userContext.GetGroupId).ToList();

            List<ReturnUserDto> returnUserDtos = new List<ReturnUserDto>();

            foreach (var item in users)
            {
                returnUserDtos.Add(_mapper.Map<ReturnUserDto>(item));
            }


            return returnUserDtos;
        }

        // Delete one member

        public void DeleteMember(int id)
        {
            var deleteUser = _context.Users.FirstOrDefault(x => x.Id == id);
            deleteUser.RoleId = null;
            deleteUser.GroupId = null;
            _context.Users.Update(deleteUser);
            _context.SaveChanges();
        }

        // Leave member
        public void LeaveGroup()
        {
            User user = _context.Users.FirstOrDefault(x => x.Id == _userContext.GetUserId);
            user.GroupId = null;
            user.RoleId = null;

            _context.Users.Update(user);
            _context.SaveChanges();
        }

        // Give role to member  / change role 

        public void ChangeRole(ChangeRoleDto dto)
        {
            User user = _context.Users.FirstOrDefault(x => x.Id == dto.Id);
            user.RoleId = dto.Role;
            _context.Users.Update(user);
            _context.SaveChanges();
        }

        // Change name group
        public void ChangeName(ChangeGroupNameDto dto)
        {
            if (_context.Groups.FirstOrDefault(x => x.Name == dto.GroupName) is not null)
            {
                throw new BadRequestException("This name is taken");
            }
            var group = _context.Groups.FirstOrDefault(x => x.Id == _userContext.GetGroupId);
            group.Name = dto.GroupName;
            _context.Groups.Update(group);
            _context.SaveChanges();
        }


    }
}
