using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Training.Models;

namespace Training.Services.Interfaces
{
    public interface IItemServices : IServices
    {
        public Task<ActionResult<IEnumerable<Item>>> GetAllItems();
        public Task<ActionResult<IEnumerable<Object>>> GetFilesAndFoldersFromParentFolder(string parentFolderId);
    }
}
