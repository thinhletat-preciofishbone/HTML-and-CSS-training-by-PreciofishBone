using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Training.Models;
using Training.Services.AbstractServices;
using Training.Services.Interfaces;

namespace Training.Services
{
    public class ItemServices : IItemServices
    {
        AItemDatabaseServices ItemDatabaseServices;
        public ItemServices(AItemDatabaseServices _databaseServices)
        {
            ItemDatabaseServices = _databaseServices;
        }
        //public async Task<ActionResult<IEnumerable<Item>>> SelectAll()
        //{
        //    return await DatabaseServices.D.Item.ToListAsync();
        //}

        public void Test()
        {
        }

        public async Task<ActionResult<IEnumerable<Item>>> GetAllItems()
        {
            return await ItemDatabaseServices.GetAllItems();
        }

        public async Task<ActionResult<IEnumerable<Object>>> GetFilesAndFoldersFromParentFolder(string _parentFolderId)
        {
            return await ItemDatabaseServices.GetFilesAndFoldersFromParentFolder(_parentFolderId);
        }
    }
}
