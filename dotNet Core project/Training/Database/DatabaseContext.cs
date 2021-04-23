
using Microsoft.EntityFrameworkCore;
using Training.Models;
using Training.Services;

namespace Training.Database
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        // Table name File?
        public DbSet<File> File { get; set; }
        public DbSet<Folder> Folder { get; set; }
        public DbSet<Item> Item { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<File>().ToTable("File");
            modelBuilder.Entity<Folder>().ToTable("Folder");
            modelBuilder.Entity<Item>().ToTable("Item");
        }
    }
}
