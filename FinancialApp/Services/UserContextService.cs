using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace FinancialApp.Services
{
    public interface IUserContextService
    {
        ClaimsPrincipal User { get; }
        int? GetUserId { get; }
        string GetRoleName { get; }
        int? GetGroupId { get; }
    }
    public class UserContextService : IUserContextService
    {
        private readonly IHttpContextAccessor httpContextAccessor;

        public UserContextService(IHttpContextAccessor httpContextAccessor)
        {
            this.httpContextAccessor = httpContextAccessor;
        }
        public ClaimsPrincipal User => httpContextAccessor.HttpContext?.User;

        public int? GetUserId => User is null ? null : (int?)int.Parse(User.FindFirst(u => u.Type == ClaimTypes.NameIdentifier).Value);
        public string GetRoleName => User is null ? null : User.FindFirst(u => u.Type == ClaimTypes.Role).Value;
        public int? GetGroupId => User is null ? null : (int?)int.Parse(User.FindFirst(u => u.Type == "Group").Value);
    }
}
