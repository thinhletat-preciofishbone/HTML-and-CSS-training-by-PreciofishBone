using Microsoft.SharePoint.Client;
using System;
using System.Collections;
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
            ResultsListBox.DataSource = null;

            var siteUrl = "http://sp2013found/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                var web = context.Web;
                context.Load(web, w => w.Title, w => w.Description);

                var query = from list in web.Lists.Include(l => l.Title)
                            where list.Hidden == false &&
                                list.ItemCount > 0
                            select list;
                var lists = context.LoadQuery(query);
                context.ExecuteQuery();

                ResultsListBox.Items.Add(web.Title);
                foreach (var list in lists)
                {
                    ResultsListBox.Items.Add(list.Title);
                }
            }
        }

        private void NestedIncludesButton_Click(object sender, EventArgs e)
        {
            ResultsListBox.DataSource = null;

            var siteUrl = "http://sp2013found/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                var web = context.Web;
                var lists = web.Lists;
                context.Load(lists, lc => lc.Include(
                    l => l.Title,
                    l => l.Fields.Include(
                        f => f.Title)));
                context.ExecuteQuery();

                foreach (var list in lists)
                {
                    ResultsListBox.Items.Add(list.Title);
                    foreach (var field in list.Fields)
                    {
                        ResultsListBox.Items.Add("\t" + field.Title);
                    }
                }
            }
        }

        private void CamlQueryButton_Click(object sender, EventArgs e)
        {
            ResultsListBox.DataSource = null;

            var siteUrl = "http://sp2013found/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                var web = context.Web;
                var list = web.Lists.GetByTitle("Products");
                var query = new CamlQuery();
                query.ViewXml = "<View>" +
                                "<Query>" +
                                "<Where><Eq>" +
                                "<FieldRef Name='Category' " +
                                    "LookupId='True' />" +
                                "<Value Type='Lookup'>1</Value>" +
                                "</Eq></Where>" +
                                "</Query>" +
                                "</View>"; 
                var items = list.GetItems(query);
                context.Load(list, l => l.Title);
                context.Load(items, c => c.Include(li => li["ID"], li => li["Title"]));
                context.ExecuteQuery();

                ResultsListBox.Items.Add(list.Title);
                foreach (var item in items)
                {
                    ResultsListBox.Items.Add(item["Title"]);
                }
            }
        }

        private void BindingButton_Click(object sender, EventArgs e)
        {
            ResultsListBox.DataSource = null;

            var siteUrl = "http://localhost/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                var web = context.Web;
                var list = web.Lists.GetByTitle("Products");
                var query = new CamlQuery();
                query.ViewXml = "<View>" +
                                "<Query>" +
                                "<Where><Eq>" +
                                "<FieldRef Name='Category' " +
                                    "LookupId='True' />" +
                                "<Value Type='Lookup'>1</Value>" +
                                "</Eq></Where>" +
                                "</Query>" +
                                "</View>";
                var items = list.GetItems(query);
                context.Load(items,
                    c => c.Include(li => li["ID"], li => li["Title"]));
                context.ExecuteQuery();

                var listData = new List<DictionaryEntry>();
                foreach (var item in items)
                {
                    var data = new DictionaryEntry(item["ID"], item["Title"]);
                    listData.Add(data);
                }

                ResultsListBox.DataSource = listData;
                ResultsListBox.DisplayMember = "Value";
                ResultsListBox.ValueMember = "Key";
            }

        }

        private void CreateListButton_Click(object sender, EventArgs e)
        {
            ResultsListBox.DataSource = null;

            var siteUrl = "http://localhost/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                try
                {
                    var web = context.Web;
                    var lci = new ListCreationInformation();
                    lci.Title = "Tasks";
                    lci.QuickLaunchOption = QuickLaunchOptions.On;
                    lci.TemplateType = (int)ListTemplateType.Tasks;
                    var list = web.Lists.Add(lci);

                    context.ExecuteQuery();

                    ResultsListBox.Items.Add("List added");
                }
                catch (Exception ex)
                {
                    var message = ex.GetType().ToString() +
                        Environment.NewLine +
                        ex.ToString();
                    MessageBox.Show(message);
                }
            }
        }

        private void BatchExceptionButton_Click(object sender, EventArgs e)
        {
            ResultsListBox.DataSource = null;

            var siteUrl = "http://sp2013found/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                try
                {
                    var web = context.Web;
                    List list = null;
                    var scope = new ExceptionHandlingScope(context);

                    using (scope.StartScope())
                    {
                        using (scope.StartTry())
                        {
                            list = web.Lists.GetByTitle("Tasks");
                            context.Load(list);
                        }

                        using (scope.StartCatch())
                        {
                            var lci = new ListCreationInformation();
                            lci.Title = "Tasks";
                            lci.QuickLaunchOption = QuickLaunchOptions.On;
                            lci.TemplateType = (int)ListTemplateType.Tasks;
                            list = web.Lists.Add(lci);
                        }

                        using (scope.StartFinally())
                        {
                            list = web.Lists.GetByTitle("Tasks");
                            context.Load(list);
                        }
                    }


                    context.ExecuteQuery();

                    var status = scope.HasException ? " created" : " loaded";
                    ResultsListBox.Items.Add(list.Title + status);
                }
                catch (Exception ex)
                {
                    var message = ex.GetType().ToString() +
                        Environment.NewLine +
                        ex.ToString();
                    MessageBox.Show(message);
                }
            }
        }

        private void CreateItemButton_Click(object sender, EventArgs e)
        {
            ResultsListBox.DataSource = null;

            var siteUrl = "http://localhost/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                try
                {
                    var web = context.Web;
                    var list = web.Lists.GetByTitle("Tasks");

                    var ici = new ListItemCreationInformation();
                    var item = list.AddItem(ici);
                    item["Title"] = "Sample Task";
                    item["AssignedTo"] = web.CurrentUser;
                    item["DueDate"] = DateTime.Now.AddDays(7);
                    item.Update();

                    context.ExecuteQuery();

                    ResultsListBox.Items.Add("Item added");
                }
                catch (Exception ex)
                {
                    var message = ex.GetType().ToString() +
                        Environment.NewLine +
                        ex.ToString();
                    MessageBox.Show(message);
                }
            }
        }

        private void UpdateItemButton_Click(object sender, EventArgs e)
        {
            ResultsListBox.DataSource = null;

            var siteUrl = "http://localhost/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                try
                {
                    var web = context.Web;
                    var list = web.Lists.GetByTitle("Tasks");

                    var query = new CamlQuery();
                    query.ViewXml = "<View><RowLimit>1</RowLimit></View>";
                    var items = list.GetItems(query);
                    context.Load(items);
                    context.ExecuteQuery();

                    var item = items.FirstOrDefault();
                    if (item != null)
                    {
                        item["Status"] = "In Progress";
                        item["PercentComplete"] = 0.1;
                        item.Update();
                    }
                    context.ExecuteQuery();

                    ResultsListBox.Items.Add("Item updated");
                }
                catch (Exception ex)
                {
                    var message = ex.GetType().ToString() +
                        Environment.NewLine +
                        ex.ToString();
                    MessageBox.Show(message);
                }
            }
        }
    }
}
