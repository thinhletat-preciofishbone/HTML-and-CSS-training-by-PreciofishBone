using System;
using System.Collections;
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
    public class ItemsController : ControllerBase
    {
        const string rootFolderId = "folder-root";
        private readonly DatabaseContext _context;

        public ItemsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Items
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItem()
        {
            return await _context.Item.ToListAsync();
        }

        // GET: api/Items/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetItem(string id)
        {
            var item = await _context.Item.FindAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }

        // GET: api/Items/GetFilesAndFoldersFromParentFolder/folder-root
        [HttpGet("GetFilesAndFoldersFromParentFolder/{parentFolderId}")]
        public async Task<ActionResult<IEnumerable<Object>>> GetFilesAndFoldersFromParentFolder(string parentFolderId)
        {
            // order by ascending
            var query2 = await (from itemData in _context.Item
                                join file in _context.File on itemData.Id equals file.Id into newTable
                                from newTableData in newTable.DefaultIfEmpty()
                                where (itemData.ParentFolderId == parentFolderId) && (itemData.Id != rootFolderId)
                                select new { itemData , fileExtension = newTableData.Extension })
                                .OrderBy(newTableData => newTableData.fileExtension)
                                .ToListAsync();

            if (query2 == null)
            {
                return NotFound();
            }

            return Ok(query2);
        }
        
        // PUT: api/Items/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItem(string id, Item item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemExists(id))
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

        // POST: api/Items
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Item>> PostItem(Item item)
        {
            File f = new File();
            _context.Item.Add(item);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ItemExists(item.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetItem", new { id = item.Id }, item);
        }

        [HttpPost("PostNewFile")]
        public async Task<ActionResult<Item>> PostNewFile([FromBody] Item inputItem)
        {
            Item item = new()
            {
                Id = inputItem.Id,
                Name = inputItem.Name,
                CreatedTime = inputItem.CreatedTime,
                CreatedBy = inputItem.CreatedBy,
                ModifiedTime = inputItem.ModifiedTime,
                ModifiedBy = inputItem.ModifiedBy,
                ParentFolderId = inputItem.ParentFolderId
            };

            _context.Item.Add(item);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ItemExists(item.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetItem", new { id = item.Id }, item);
        }

        // DELETE: api/Items/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(string id)
        {
            var item = await _context.Item.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            _context.Item.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ItemExists(string id)
        {
            return _context.Item.Any(e => e.Id == id);
        }
    }
}
