using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Training.Database;
using Training.Models;

namespace Training.Services.AbstractServices
{
    public abstract class AFileDatabaseServices : ADatabaseServices
    {
        public AFileDatabaseServices(DatabaseContext _databaseContext) : base(_databaseContext)
        {
        }

        public abstract Task<ActionResult<IEnumerable<File>>> GetAllFiles();
        public abstract Task<ActionResult<File>> GetFile(string id);
        public abstract Task<Boolean> PutFile(string id, File file);
        public abstract Task<Boolean> PostFile(File file);
        public abstract Task<Boolean> DeleteFile(string id);
        public abstract bool FileExists(string id);
    }
}
