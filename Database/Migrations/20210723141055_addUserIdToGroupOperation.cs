using Microsoft.EntityFrameworkCore.Migrations;

namespace Database.Migrations
{
    public partial class addUserIdToGroupOperation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "GroupOperation",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_GroupOperation_UserId",
                table: "GroupOperation",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_GroupOperation_Users_UserId",
                table: "GroupOperation",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GroupOperation_Users_UserId",
                table: "GroupOperation");

            migrationBuilder.DropIndex(
                name: "IX_GroupOperation_UserId",
                table: "GroupOperation");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "GroupOperation");
        }
    }
}
