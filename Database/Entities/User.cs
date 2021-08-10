using System.Collections.Generic;

namespace Database.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public int? RoleId { get; set; }
        public virtual Role Role { get; set; }
        public int? GroupId { get; set; }
        public virtual Group Group { get; set; }

        public virtual List<Operation> Operations { get; set; }

    }
}
