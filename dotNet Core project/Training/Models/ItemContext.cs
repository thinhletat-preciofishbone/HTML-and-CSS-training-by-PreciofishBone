using Microsoft.EntityFrameworkCore;

namespace Training.Models
{
    public class ItemContext : DbContext
    {
        public ItemContext(DbContextOptions<ItemContext> options) : base(options)
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
