using Database.DataAccess;

namespace FinancialApp.Services
{
    public interface IOperationGroupService
    {

    }
    public class OperationGroupService
    {
        private readonly FinContext _context;
        private readonly IUserContextService _userContext;

        public OperationGroupService(FinContext context, IUserContextService userContext)
        {
            _context = context;
            _userContext = userContext;
        }


        // Add operation
        //public void AddOperation(OperationDto dto)
        //{
        //    User user = _context.Users.FirstOrDefault(x => x.Id == _userContext.GetUserId);
        //    var userOperation = user.Operations.ToList();
        //    userOperation.


        //    if (allPrice >= dto.Price)
        //    {

        //    }
        //}

        // Rename operation title | desctiption

        // Delete opeartion by Id

        // Delete all operation

        // Get All operation

        // Sort by title | price | date


    }
}
