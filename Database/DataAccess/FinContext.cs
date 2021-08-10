using Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace Database.DataAccess
{
    public class FinContext : DbContext
    {
        public FinContext(DbContextOptions options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Operation> Operations { get; set; }
        public DbSet<GroupOperation> GroupOperation { get; set; }
        public DbSet<Group> Groups { get; set; }


    }
}
