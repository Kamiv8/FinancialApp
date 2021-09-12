using AutoMapper;
using Database.DataAccess;
using Database.Entities;
using FinancialApp.ModelsDto;
using FinancialApp.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FinancialApp.Services
{
    public interface IOperationService
    {
        void AddOperation(Operation dto);
        void DeleteAll();
        void DeleteOne(int id);
        IEnumerable<Operation> GetAll();
        void RenameOperation(RenameDto dto, int id);
        IEnumerable<Operation> Sort(SortByDto dto);
        IEnumerable<OperationDto> GetTenOperations();

    }
    public class OperationService : IOperationService
    {
        private readonly FinContext _context;
        private readonly IMapper _mapper;
        private readonly IUserContextService _userContext;

        public OperationService(FinContext context, IMapper mapper, IUserContextService userContext)
        {
            _context = context;
            _mapper = mapper;
            _userContext = userContext;
        }

        // Add
        public void AddOperation(Operation dto)
        {

            Operation op = _mapper.Map<Operation>(dto);
            op.UserId = _userContext.GetUserId;
            _context.Add(op);
            _context.SaveChanges();


        }
        // DeleteAll
        public void DeleteAll()
        {
            List<Operation> allOperation = _context.Operations.Where(x => x.UserId == _userContext.GetUserId).ToList();
            if (allOperation.Count == 0)
            {
                throw new Exception("Your operation list is empty");
            }
            _context.RemoveRange(allOperation);
            _context.SaveChanges();

        }

        // DeleteOne Id
        public void DeleteOne(int id)
        {
            var operation = _context.Operations.FirstOrDefault(x => x.UserId == _userContext.GetUserId && x.Id == id);
            _context.Remove(operation);
            _context.SaveChanges();

        }

        // GetAll
        public IEnumerable<Operation> GetAll()
        {
            List<Operation> operationList = _context.Operations.Where(x => x.UserId == _userContext.GetUserId).ToList();
            if (operationList.Count == 0)
            {
                throw new Exception("Operation List is empty");
            }

            return operationList;
        }
        public IEnumerable<OperationDto> GetTenOperations()
        {
            List<Operation> operationList = _context.Operations.Where(x => x.UserId == _userContext.GetUserId).OrderBy(x => x.Id).ToList();
            operationList.Reverse();
            var currentList = operationList.Take(10).ToList();
            var op = _mapper.Map<List<OperationDto>>(currentList);
            return op;
        }

        // Rename title or | description

        public void RenameOperation(RenameDto dto, int id)
        {
            Operation operation = _context.Operations.FirstOrDefault(x => x.UserId == _userContext.GetUserId && x.Id == id);


            operation.Title = dto.Title;
            operation.Description = dto.Description;



            _context.Update(operation);
            _context.SaveChanges();
        }

        // Sort by title | price | date

        public IEnumerable<Operation> Sort(SortByDto dto)
        {
            var operationList = _context.Operations
                .OrderBy(x => dto.SortBy)
                .Reverse()
                .ToList();

            return operationList;
        }

    }
}
