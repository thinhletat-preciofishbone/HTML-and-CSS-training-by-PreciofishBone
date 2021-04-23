using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Training.Models;

namespace Training.Services.Interfaces
{
    public interface IFileServices : IServices
    {
        public Task<ActionResult<IEnumerable<File>>> GetAllFiles();
        public Task<ActionResult<File>> GetFile(string id);
        public Task<Boolean> PutFile(string id, File file);
        public Task<Boolean> PostFile(File file);
        public Task<Boolean> DeleteFile(string id);
        public bool FileExists(string id);
    }
}
