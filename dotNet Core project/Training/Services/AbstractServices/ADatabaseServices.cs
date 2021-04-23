using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Training.Database;
using Training.Models;

namespace Training.Services.AbstractServices
{
    public abstract class ADatabaseServices
    {
        protected readonly string rootFolderId = "folder-root";

        protected DatabaseContext DatabaseContext;
        public ADatabaseServices(DatabaseContext _databaseContext)
        {
            this.DatabaseContext = _databaseContext;
        }

        public async Task<ActionResult<IEnumerable<Object>>> GetFilesAndFoldersFromParentFolder(string parentFolderId)
        {
            // order by ascending
            var result = await (from itemData in DatabaseContext.Item
                                join file in DatabaseContext.File on itemData.Id equals file.Id into newTable
                                from newTableData in newTable.DefaultIfEmpty()
                                where (itemData.ParentFolderId == parentFolderId) && (itemData.Id != this.rootFolderId)
                                select new { itemData, fileExtension = newTableData.Extension })
                            .OrderBy(newTableData => newTableData.fileExtension)
                            .ToListAsync();
            return result;
        }
    }
}
