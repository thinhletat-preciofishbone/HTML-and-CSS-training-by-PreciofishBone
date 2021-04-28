using Microsoft.SharePoint.Client;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net;
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

        private void LoadButton_Click(object sender, EventArgs e)
        {
            var siteUrl = "http://localhost/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                var web = context.Web;
                context.Load(web);
                context.Load(web.Lists);
                context.ExecuteQuery();
                ResultsListBox.Items.Add(web.Title);
                ResultsListBox.Items.Add(web.Lists.Count);
            }
        }

        private void LoadQueryButton_Click(object sender, EventArgs e)
        {
            var siteUrl = "http://localhost/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                var web = context.Web;

                var query = from list in web.Lists
                            where list.Hidden == false &&
                                    list.ItemCount > 0
                            select list;
                var lists = context.LoadQuery(query);
                context.ExecuteQuery();

                ResultsListBox.Items.Add(lists.Count());
            }
        }

        private void RestXmlButton_Click(object sender, EventArgs e)
        {
            var url = "http://localhost/sites/demo/_api/Web/";
            var client = new WebClient();
            client.UseDefaultCredentials = true;
            var xml = client.DownloadString(url);

            var doc = XDocument.Parse(xml);
            XNamespace ds = "http://schemas.microsoft.com/" +
                "ado/2007/08/dataservices";
            var titles = doc.Descendants(ds + "Title");
            var title = titles.First().Value;

            ResultsListBox.Items.Add(title);
        }

        private void RestJsonButton_Click(object sender, EventArgs e)
        {
            var url = "http://localhost/sites/demo/_api/Web/";
            var client = new WebClient();
            client.UseDefaultCredentials = true;
            client.Headers[HttpRequestHeader.Accept] =
                "application/json;odata=verbose";
            var json = client.DownloadString(url);

            var ser = new JavaScriptSerializer();
            dynamic item = ser.Deserialize<object>(json);

            ResultsListBox.Items.Add(item["d"]["Title"]);
        }
    }
}
