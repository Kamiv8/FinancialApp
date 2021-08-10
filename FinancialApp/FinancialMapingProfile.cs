using AutoMapper;
using Database.Entities;
using FinancialApp.ModelsDto;
using FinancialApp.ModelsDTO;

namespace FinancialApp
{
    public class FinancialMapingProfile : Profile
    {
        public FinancialMapingProfile()
        {
            CreateMap<OperationDto, Operation>();

            CreateMap<User, ReturnUserDto>()
                .ForMember(x => x.RoleName, x => x.MapFrom(src => src.Role.Name));

        }
    }
}
