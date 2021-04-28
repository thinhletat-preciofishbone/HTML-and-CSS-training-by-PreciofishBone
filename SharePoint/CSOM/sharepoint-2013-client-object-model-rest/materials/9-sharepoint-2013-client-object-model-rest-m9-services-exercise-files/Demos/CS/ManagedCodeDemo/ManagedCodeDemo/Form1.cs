using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Search.Query;
using Microsoft.SharePoint.Client.Taxonomy;
using Microsoft.SharePoint.Client.UserProfiles;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using System.Windows.Forms;
using System.Xml.Linq;

namespace ManagedCodeDemo
{
    public partial class Form1 : System.Windows.Forms.Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void ProfileButton_Click(object sender, EventArgs e)
        {
            var userName = WindowsIdentity.GetCurrent().Name;
            var proxy = new UserProfileProxy.UserProfileService();
            proxy.UseDefaultCredentials = true;
            proxy.Url = "http://localhost/sites/demo/_vti_bin/userprofileservice.asmx";
            var props = proxy.GetUserProfileByName(userName);
            ResultsListBox.Items.Add("User profile properties for " + userName);
            for (int i = 0; i < props.Length; i++)
            {
                var item = props[i];
                var value = item.Values.Length > 0 ? item.Values[0].Value : null;
                if (value != null)
                {
                    ResultsListBox.Items.Add(item.Name + ": " + value);
                }
            }
        }

        private void ListDataButton_Click(object sender, EventArgs e)
        {
            var serviceUrl = "http://localhost/sites/demo/_vti_bin/ListData.svc";
            var context = new DemoProxy.DemoDataContext(new Uri(serviceUrl));
            context.Credentials = System.Net.CredentialCache.DefaultCredentials;

            var category = "Beverages";
            var products = from product in context.Products
                           where product.UnitsInStock > 0 &&
                            product.Category.Title == category
                           select product;

            ResultsListBox.Items.Add(category);
            foreach (var product in products)
            {
                ResultsListBox.Items.Add(product.Title);
            }

        }

    }
}
