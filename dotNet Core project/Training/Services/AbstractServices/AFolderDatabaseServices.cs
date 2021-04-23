using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Training.Database;
using Training.Models;

namespace Training.Services.AbstractServices
{
    public abstract class AFolderDatabaseServices : ADatabaseServices
    {
        public AFolderDatabaseServices(DatabaseContext _databaseContext) : base(_databaseContext)
        {
        }

        public abstract Task<ActionResult<IEnumerable<Folder>>> GetAllFolders();
        public abstract Task<ActionResult<Folder>> GetFolder(string id);
        public abstract Task<Boolean> PutFolder(string id, Folder file);
        public abstract Task<Boolean> PostFolder(Folder file);
        public abstract Task<Boolean> DeleteFolder(string id);
        public abstract bool FolderExists(string id);
    }
}
