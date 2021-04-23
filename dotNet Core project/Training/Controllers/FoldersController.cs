using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Training.Database;
using Training.Models;
using Training.Services.Interfaces;

namespace Training.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoldersController : ControllerBase
    {
        private readonly IFolderServices FolderServices;

        public FoldersController(IFolderServices _folderServices)
        {
            FolderServices = _folderServices;
        }

        // GET: api/Folders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Folder>>> GetAllFolders()
        {
            return await FolderServices.GetAllFolders();
        }

        // GET: api/Folders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Folder>> GetFolder(string id)
        {
            var folder = await FolderServices.GetFolder(id);

            if (folder == null)
            {
                return NotFound();
            }

            return folder;
        }

        // PUT: api/Folders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<Boolean> PutFolder(string id, Folder folder)
        {
            return await FolderServices.PutFolder(id, folder);
        }

        // POST: api/Folders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<Boolean> PostFolder(Folder folder)
        {
            return await FolderServices.PostFolder(folder);
        }

        // DELETE: api/Folders/5
        [HttpDelete("{id}")]
        public async Task<Boolean> DeleteFolder(string id)
        {
            return await FolderServices.DeleteFolder(id);
        }
    }
}
