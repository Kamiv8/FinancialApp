using AutoMapper;
using Database.Entities;
using FinancialApp.ModelsDto;
using FinancialApp.ModelsDTO;
using System.Collections.Generic;

namespace FinancialApp
{
    public class FinancialMapingProfile : Profile
    {
        public FinancialMapingProfile()
        {
            CreateMap<OperationDto, Operation>();
            CreateMap<List<Operation>, List<OperationDto>>();

            CreateMap<User, ReturnUserDto>()
                .ForMember(x => x.RoleName, x => x.MapFrom(src => src.Role.Name));

        }
    }
}
