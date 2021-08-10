using Database.DataAccess;
using Database.Entities;
using FinancialApp.ModelsDTO;
using FinancialApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FinancialApp.Controllers
{
    [Route("operation/")]
    [Authorize]
    public class OperationController : ControllerBase
    {
        private readonly FinContext _finContext;
        private readonly IOperationService _service;

        public OperationController(FinContext finContext, IOperationService service)
        {
            _finContext = finContext;
            _service = service;
        }


        [HttpPost]
        [Route("add")]
        public ActionResult AddOperation([FromBody] Operation op)
        {
            _service.AddOperation(op);
            return Ok();
        }

        [HttpDelete]
        [Route("deleteAll")]
        public ActionResult DeleteAll()
        {
            _service.DeleteAll();
            return Ok();
        }

        [HttpDelete]
        [Route("delete/{id}")]
        public void DeleteById([FromRoute] int id)
        {
            _service.DeleteOne(id);
        }
        [HttpGet]
        [Route("getAll")]
        public ActionResult<IEnumerable<Operation>> GetAll()
        {
            var operations = _service.GetAll();
            return Ok(operations);
        }

        [HttpPatch]
        [Route("rename/{id}")]
        public ActionResult RenameOperation([FromBody] RenameDto dto, [FromRoute] int id)
        {
            _service.RenameOperation(dto, id);
            return Ok();
        }
    }
}
