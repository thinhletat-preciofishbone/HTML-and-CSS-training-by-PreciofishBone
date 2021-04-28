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

        private void LibraryButton_Click(object sender, EventArgs e)
        {
            var siteUrl = "http://localhost/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                try
                {
                    var web = context.Web;
                    var lci = new ListCreationInformation();
                    lci.Title = "Project Documents";
                    lci.TemplateType = (int)ListTemplateType.DocumentLibrary;
                    var list = web.Lists.Add(lci);

                    list.Fields.AddFieldAsXml("<Field Type=\"Number\" DisplayName=\"Year\" Name=\"Year\" Min=\"2000\" Max=\"2100\" Decimals=\"0\" />", true, AddFieldOptions.DefaultValue);
                    list.Fields.AddFieldAsXml("<Field Type=\"User\" DisplayName=\"Coordinator\" Name=\"Coordinator\" List=\"UserInfo\" ShowField=\"ImnName\" UserSelectionMode=\"PeopleOnly\" UserSelectionScope=\"0\" />", true, AddFieldOptions.DefaultValue);
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

        private void DocumentButton_Click(object sender, EventArgs e)
        {
            var siteUrl = "http://localhost/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                try
                {
                    var web = context.Web;
                    var list = web.Lists.GetByTitle("Project Documents");

                    var filePath = Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory) +
                        @"\Samples\Sample01.docx";

                    var fci = new FileCreationInformation();
                    fci.Content = System.IO.File.ReadAllBytes(filePath);
                    fci.Url = "Sample01.docx";
                    fci.Overwrite = true;
                    var file = list.RootFolder.Files.Add(fci);

                    var item = file.ListItemAllFields;
                    item["Year"] = DateTime.Now.Year;
                    item["Coordinator"] = web.CurrentUser;
                    item.Update();

                    context.ExecuteQuery();

                    ResultsListBox.Items.Add("Document uploaded");
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
