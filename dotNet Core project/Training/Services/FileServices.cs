using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Training.Models;
using Training.Services.AbstractServices;
using Training.Services.Interfaces;

namespace Training.Services
{
    public class FileServices : IFileServices
    {
        AFileDatabaseServices FileDatabaseServices;
        public FileServices(AFileDatabaseServices _fileDatabaseServices)
        {
            FileDatabaseServices = _fileDatabaseServices;
        }

        public async Task<ActionResult<IEnumerable<File>>> GetAllFiles()
        {
            return await FileDatabaseServices.GetAllFiles();
        }

        public async Task<ActionResult<File>> GetFile(string id)
        {
            return await FileDatabaseServices.GetFile(id);
        }

        public async Task<bool> PostFile(File file)
        {
            return await FileDatabaseServices.PostFile(file);
        }

        public async Task<bool> PutFile(string id, File file)
        {
            return await FileDatabaseServices.PutFile(id, file);
        }

        public async Task<bool> DeleteFile(string id)
        {
            return await FileDatabaseServices.DeleteFile(id);
        }

        public bool FileExists(string id)
        {
            return FileDatabaseServices.FileExists(id);
        }
    }
}
