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
    public class FileDatabaseServices : AFileDatabaseServices
    {
        public FileDatabaseServices(DatabaseContext _databaseContext) : base(_databaseContext)
        {
        }

        public override async Task<ActionResult<IEnumerable<File>>> GetAllFiles()
        {
            return await DatabaseContext.File.ToListAsync();
        }

        public override async Task<ActionResult<File>> GetFile(string id)
        {
            return await DatabaseContext.File.FindAsync(id);
        }

        public override async Task<Boolean> PutFile(string id, File file)
        {
            if (id != file.Id)
            {
                return false;
            }

            DatabaseContext.Entry(file).State = EntityState.Modified;

            try
            {
                await DatabaseContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FileExists(id))
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

        public override async Task<Boolean> PostFile(File file)
        {
            DatabaseContext.File.Add(file);
            try
            {
                await DatabaseContext.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (FileExists(file.Id))
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

        public override async Task<Boolean> DeleteFile(string id)
        {
            var file = await DatabaseContext.File.FindAsync(id);
            if (file == null)
            {
                return false;
            }

            DatabaseContext.File.Remove(file);
            await DatabaseContext.SaveChangesAsync();

            return true;
        }

        public override bool FileExists(string id)
        {
            return DatabaseContext.File.Any(e => e.Id == id);
        }
    }
}
