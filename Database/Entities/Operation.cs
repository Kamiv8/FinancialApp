using System;

namespace Database.Entities
{
    public class Operation
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public float Price { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public int? UserId { get; set; }
        public virtual User User { get; set; }

    }
}
