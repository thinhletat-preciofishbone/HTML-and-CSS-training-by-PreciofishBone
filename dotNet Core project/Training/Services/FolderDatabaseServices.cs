using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Training.Database;
using Training.Models;
using Training.Services.AbstractServices;

namespace Training.Services
{
    public class FolderDatabaseServices : AFolderDatabaseServices
    {
        public FolderDatabaseServices(DatabaseContext _databaseContext) : base(_databaseContext)
        {
        }

        public override async Task<ActionResult<IEnumerable<Folder>>> GetAllFolders()
        {
            return await DatabaseContext.Folder.ToListAsync();
        }

        public override async Task<ActionResult<Folder>> GetFolder(string id)
        {
            return await DatabaseContext.Folder.FindAsync(id);
        }

        public override async Task<bool> PostFolder(Folder folder)
        {
            DatabaseContext.Folder.Add(folder);
            try
            {
                await DatabaseContext.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (FolderExists(folder.Id))
                {
                    return false;
                }
                else
                {
                    throw;
                }
            }

            return true;
        }

        public override async Task<bool> PutFolder(string id, Folder folder)
        {
            if (id != folder.Id)
            {
                return false;
            }

            DatabaseContext.Entry(folder).State = EntityState.Modified;

            try
            {
                await DatabaseContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FolderExists(id))
                {
                    return false;
                }
                else
                {
                    throw;
                }
            }

            return true;
        }

        public override async Task<bool> DeleteFolder(string id)
        {
            var folder = await DatabaseContext.Folder.FindAsync(id);
            if (folder == null)
            {
                return false;
            }

            DatabaseContext.Folder.Remove(folder);
            await DatabaseContext.SaveChangesAsync();

            return true;
        }

        public override bool FolderExists(string id)
        {
            return DatabaseContext.Folder.Any(e => e.Id == id);
        }
    }
}
