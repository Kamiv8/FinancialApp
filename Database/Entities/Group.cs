using System.Collections.Generic;

namespace Database.Entities
{
    public class Group
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public int MaxMember { get; set; }

        public virtual List<GroupOperation> GroupOperations { get; set; }

    }
}
