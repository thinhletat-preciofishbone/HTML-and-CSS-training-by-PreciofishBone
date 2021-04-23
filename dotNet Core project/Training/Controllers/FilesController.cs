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
    public class FilesController : ControllerBase
    {
        private readonly IFileServices FileServices;

        public FilesController(IFileServices _fileServices)
        {
            FileServices = _fileServices;
        }

        // GET: api/Files
        [HttpGet]
        public async Task<ActionResult<IEnumerable<File>>> GetAllFiles()
        {
            return await FileServices.GetAllFiles();
        }

        // GET: api/Files/5
        [HttpGet("{id}")]
        public async Task<ActionResult<File>> GetFile(string id)
        {
            var file = await FileServices.GetFile(id);

            if (file == null)
            {
                return NotFound();
            }

            return file;
        }

        // PUT: api/Files/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<Boolean> PutFile(string id, File file)
        {
            return await FileServices.PutFile(id, file);
        }

        // POST: api/Files
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<Boolean> PostFile(File file)
        {
            return await FileServices.PostFile(file);
        }

        // DELETE: api/Files/5
        [HttpDelete("{id}")]
        public async Task<Boolean> DeleteFile(string id)
        {
            return await FileServices.DeleteFile(id);
        }
    }
}
