using Database.Entities;
using FinancialApp.ModelsDto;
using FinancialApp.ModelsDTO;
using FinancialApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FinancialApp.Controllers
{
    [Authorize]
    [Route("group/")]
    public class GroupController : ControllerBase
    {
        private readonly IGroupService _service;

        public GroupController(IGroupService service)
        {
            _service = service;
        }


        [HttpPost]
        [Route("create")]
        public ActionResult CreateGroup([FromBody] GroupDto group)
        {
            _service.Create(group);

            return StatusCode(201);

        }


        [HttpPost]
        [Route("addUser")]

        public ActionResult AddUser([FromBody] AddUserDto addUserDto)
        {
            _service.AddUser(addUserDto);

            return Ok();
        }

        [HttpDelete]
        [Route("delete")]
        [Authorize(Roles = "Creator")]
        public ActionResult Delete()
        {
            _service.DeleteGroup();
            return Ok();
        }

        [HttpPatch]
        [Route("changePassword")]
        [Authorize(Roles = "Creator")]
        public ActionResult ChangePassword(ChangePasswordDto dto)
        {
            _service.ChangePassword(dto);


            return Ok();
        }
        [HttpGet]
        [Route("getAll")]
        [Authorize(Roles = "Creator, Member")]
        public ActionResult<IEnumerable<User>> GetAll()
        {
            return Ok(_service.GetAllUsers());
        }
        [HttpDelete]
        [Route("deleteMember")]
        [Authorize(Roles = "Creator")]
        public ActionResult DeleteMember([FromRoute] int id)
        {
            _service.DeleteMember(id);

            return Ok();
        }

        [HttpPatch]
        [Route("leave")]
        [Authorize(Roles = "Member")]
        public ActionResult LeaveMember()
        {
            _service.LeaveGroup();
            return Ok();
        }

        [HttpPatch]
        [Route("changeRole")]
        [Authorize(Roles = "Creator")]
        public ActionResult ChangeRole(ChangeRoleDto dto)
        {
            _service.ChangeRole(dto);

            return Ok();
        }

        [HttpPatch]
        [Route("changeName")]
        [Authorize(Roles = "Creator")]
        public ActionResult ChangeNameGroup(ChangeGroupNameDto dto)
        {
            _service.ChangeName(dto);

            return Ok();
        }




    }
}
