using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Training.Models;
using Training.Services.AbstractServices;
using Training.Services.Interfaces;

namespace Training.Services
{
    public class FolderServices : IFolderServices
    {
        AFolderDatabaseServices FolderDatabaseServices;
        public FolderServices(AFolderDatabaseServices _folderDatabaseServices)
        {
            FolderDatabaseServices = _folderDatabaseServices;
        }

        public async Task<ActionResult<IEnumerable<Folder>>> GetAllFolders()
        {
            return await FolderDatabaseServices.GetAllFolders();
        }

        public async Task<ActionResult<Folder>> GetFolder(string id)
        {
            return await FolderDatabaseServices.GetFolder(id);
        }

        public async Task<bool> PostFolder(Folder folder)
        {
            return await FolderDatabaseServices.PostFolder(folder);
        }

        public async Task<bool> PutFolder(string id, Folder folder)
        {
            return await FolderDatabaseServices.PutFolder(id, folder);
        }

        public async Task<bool> DeleteFolder(string id)
        {
            return await FolderDatabaseServices.DeleteFolder(id);
        }

        public bool FolderExists(string id)
        {
            return FolderDatabaseServices.FolderExists(id);
        }
    }
}
