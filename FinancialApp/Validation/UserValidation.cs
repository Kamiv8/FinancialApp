
using FinancialApp.ModelsDto;
using FluentValidation;

namespace FinancialApp.Validation
{
    public class RegisterUserValidation : AbstractValidator<RegisterDto>
    {
        public RegisterUserValidation()
        {
            RuleFor(x => x.Email)
                .EmailAddress()
                .NotEmpty();
            RuleFor(x => x.Password)
                .Length(8, 20)
                .NotEmpty();
            RuleFor(x => x.ConfimPassword)
                .Length(8, 20)
                .NotEmpty()
                .Equal(x => x.Password);




        }
    }
    public class LoginUserValidation : AbstractValidator<LoginDto>
    {
        public LoginUserValidation()
        {
            RuleFor(x => x.Email)
                .EmailAddress()
                .NotEmpty();

            RuleFor(x => x.Password)
                .Length(8, 20)
                .NotEmpty();
        }
    }
    public class ChangeUserValidation : AbstractValidator<ChangeUsernameDto>
    {
        public ChangeUserValidation()
        {
            RuleFor(x => x.NewUsername)
                .NotEmpty()
                .Length(3, 10);
        }
    }
    public class ChangePasswordValidation : AbstractValidator<ChangePasswordDto>
    {
        public ChangePasswordValidation()
        {
            RuleFor(x => x.NewPassword)
                .Length(8, 20)
                .NotEmpty();
            RuleFor(x => x.ConnfimNewPassword)
                .Length(8, 20)
                .NotEmpty();
            RuleFor(x => x.OldPassword)
                .Length(8, 20)
                .NotEmpty();
        }
    }
}
