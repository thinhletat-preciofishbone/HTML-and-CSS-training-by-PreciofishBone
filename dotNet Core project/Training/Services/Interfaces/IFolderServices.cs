using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Training.Models;

namespace Training.Services.Interfaces
{
    public interface IFolderServices : IServices
    {
        public Task<ActionResult<IEnumerable<Folder>>> GetAllFolders();
        public Task<ActionResult<Folder>> GetFolder(string id);
        public Task<Boolean> PutFolder(string id, Folder folder);
        public Task<Boolean> PostFolder(Folder folder);
        public Task<Boolean> DeleteFolder(string id);
        public bool FolderExists(string id);
    }
}
