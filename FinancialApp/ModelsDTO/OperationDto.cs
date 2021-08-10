using System;

namespace FinancialApp.ModelsDto
{
    public class OperationDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public float Price { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
    }
}
