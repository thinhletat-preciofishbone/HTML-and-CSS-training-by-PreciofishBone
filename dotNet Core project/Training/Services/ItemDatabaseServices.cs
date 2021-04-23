using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Training.Database;
using Training.Models;
using Training.Services.AbstractServices;

namespace Training.Services
{
    public class ItemDatabaseServices : AItemDatabaseServices
    {
        public ItemDatabaseServices(DatabaseContext _databaseContext) : base(_databaseContext)
        {
        }

        public override async Task<ActionResult<IEnumerable<Item>>> GetAllItems()
        {
            return await DatabaseContext.Item.ToListAsync();
        }
    }
}
