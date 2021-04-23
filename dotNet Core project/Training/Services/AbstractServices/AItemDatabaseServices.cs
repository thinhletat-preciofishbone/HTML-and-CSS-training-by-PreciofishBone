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
    public abstract class AItemDatabaseServices : ADatabaseServices
    {
        protected AItemDatabaseServices(DatabaseContext _databaseContext) : base(_databaseContext)
        {
        }

        public abstract Task<ActionResult<IEnumerable<Item>>> GetAllItems();
    }
}
