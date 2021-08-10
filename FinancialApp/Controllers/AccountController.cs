using FinancialApp.ModelsDto;
using FinancialApp.ModelsDTO;
using FinancialApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FinancialApp.Controllers
{
    [Route("account/")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _service;

        public AccountController(IAccountService service)
        {
            _service = service;
        }

        [HttpPost]
        [Route("register")]
        public ActionResult RegisterAccount([FromBody] RegisterDto dto)
        {
            _service.RegisterAccount(dto);
            return Ok();
        }
        [HttpPost]
        [Route("login")]
        public ActionResult<TokenDto> LoginAccount([FromBody] LoginDto dto)
        {
            var token = _service.Login(dto);
            return Ok(token);
        }
        // get user data 

        [Authorize]
        [HttpGet]
        [Route("getData")]
        public ActionResult<ReturnUserDto> GetUserData()
        {
            var data = _service.GetUserData();

            return Ok(data);
        }

        [Authorize]
        [HttpPatch]
        [Route("username")]
        public ActionResult ChangeUsername([FromBody] ChangeUsernameDto dto)
        {
            _service.AddUsername(dto);
            return Ok();
        }

        [Authorize]
        [HttpPatch]
        [Route("password")]
        public ActionResult ChangePassword([FromBody] ChangePasswordDto dto)
        {
            _service.ChangePassword(dto);

            return Ok();

        }

        [Authorize]
        [HttpDelete]
        [Route("delete")]
        public ActionResult DeleteAccount()
        {
            _service.DeleteAccount();
            return Ok();
        }

    }
}
