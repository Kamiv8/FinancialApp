using Database.DataAccess;
using Database.Entities;
using System.Collections.Generic;
using System.Linq;

namespace FinancialApp
{
    public class FinancialSeeder
    {
        private readonly FinContext _finContext;

        public FinancialSeeder(FinContext finContext)
        {
            _finContext = finContext;
        }
        public void Seed()
        {
            if (!_finContext.Roles.Any())
            {
                IEnumerable<Role> getRoles = GetRoles();
                _finContext.Roles.AddRange(getRoles);
                _finContext.SaveChanges();
            }
        }

        private IEnumerable<Role> GetRoles()
        {
            List<Role> roles = new List<Role>()
            {
                new Role()
                {
                    Name = "Creator"
                },
                new Role()
                {
                    Name = "Member"
                }

            };
            return roles;
        }
    }
}
