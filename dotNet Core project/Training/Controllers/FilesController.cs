using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Training.Database;
using Training.Models;

namespace Training.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public FilesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Files
        [HttpGet]
        public async Task<ActionResult<IEnumerable<File>>> GetFile()
        {
            var fileList = _context.Item.Join(
            _context.File,
            item => item.Id,
            file => file.Id,
            (item, file) => new
            {
                FileId = item.Id,
                FileName = item.Name,
                FileExtension = file.Extension,
                CreatedTime = item.CreatedTime,
                CreatedBy = item.CreatedBy,
                ModifiedTime = item.ModifiedTime,
                ModifiedBy = item.ModifiedBy,
                ParentFolderId = item.ParentFolderId
            }).Where(item => item.ParentFolderId == "folder-000002");

            var folderList = _context.Item.Join(
                _context.Folder,
                item => item.Id,
                folder => folder.Id,
                (item, folder) => new
                {
                    FileId = item.Id,
                    FolderName = item.Name,
                    ParentFolderId = item.ParentFolderId
                }).Where(item => item.ParentFolderId == "folder-root" && item.FolderName != "folder-root");

            foreach (var _file in fileList)
            {
                Console.WriteLine(_file.FileName);
            }

            foreach (var _folder in folderList)
            {
                Console.WriteLine(_folder.FolderName);
            }

            return await _context.File.ToListAsync();
        }

        // GET: api/Files/5
        [HttpGet("{id}")]
        public async Task<ActionResult<File>> GetFile(string id)
        {
            var file = await _context.File.FindAsync(id);

            if (file == null)
            {
                return NotFound();
            }

            return file;
        }

        // PUT: api/Files/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFile(string id, File file)
        {
            if (id != file.Id)
            {
                return BadRequest();
            }

            _context.Entry(file).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FileExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Files
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<File>> PostFile(File file)
        {
            _context.File.Add(file);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (FileExists(file.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetFile", new { id = file.Id }, file);
        }

        // DELETE: api/Files/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFile(string id)
        {
            var file = await _context.File.FindAsync(id);
            if (file == null)
            {
                return NotFound();
            }

            _context.File.Remove(file);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FileExists(string id)
        {
            return _context.File.Any(e => e.Id == id);
        }
    }
}
