using Microsoft.SharePoint.Client;
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

        private void TermsButton_Click(object sender, EventArgs e)
        {
            var siteUrl = "http://localhost/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                try
                {
                    var lcid = Application.CurrentCulture.LCID;
                    var session = TaxonomySession.GetTaxonomySession(context);
                    var store = session.TermStores.GetByName("Managed Metadata Service");
                    var group = store.CreateGroup("Managed Code", Guid.NewGuid());
                    var set = group.CreateTermSet("Projects", Guid.NewGuid(), lcid);
                    set.CreateTerm("Penske Project", lcid, Guid.NewGuid());
                    set.CreateTerm("Manhattan Project", lcid, Guid.NewGuid());
                    set.CreateTerm("Alan Parsons Project", lcid, Guid.NewGuid());
                    context.ExecuteQuery();

                    ResultsListBox.Items.Add("Terms added");
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

                    var fields = new Field[4];
                    fields[0] = list.Fields.AddFieldAsXml("<Field Type=\"Number\" DisplayName=\"Year\" Name=\"Year\" Min=\"2000\" Max=\"2100\" Decimals=\"0\" />", true, AddFieldOptions.DefaultValue);
                    fields[1] = list.Fields.AddFieldAsXml("<Field Type=\"User\" DisplayName=\"Coordinator\" Name=\"Coordinator\" List=\"UserInfo\" ShowField=\"ImnName\" UserSelectionMode=\"PeopleOnly\" UserSelectionScope=\"0\" />", true, AddFieldOptions.DefaultValue);
                    fields[2] = list.Fields.AddFieldAsXml("<Field Type=\"TaxonomyFieldType\" DisplayName=\"Project\" Name=\"Project\" ShowField=\"Term1033\" Version=\"1\" />", true, AddFieldOptions.DefaultValue);
                    fields[3] = list.Fields.AddFieldAsXml("<Field Type=\"Note\" DisplayName=\"Project_0\" Name=\"Project_x0020_0\" ShowInViewForms=\"FALSE\" Hidden=\"TRUE\" CanToggleHidden=\"TRUE\" ColName=\"ntext2\" />", false, AddFieldOptions.DefaultValue);

                    var session = TaxonomySession.GetTaxonomySession(context);
                    var store = session.TermStores.GetByName("Managed Metadata Service");
                    var group = store.Groups.GetByName("Managed Code");
                    var set = group.TermSets.GetByName("Projects");

                    context.Load(fields[2]);
                    context.Load(store, s => s.Id);
                    context.Load(set, s => s.Id);
                    context.ExecuteQuery();

                    var taxField = context.CastTo<TaxonomyField>(fields[2]);
                    taxField.SspId = store.Id;
                    taxField.TermSetId = set.Id;
                    taxField.Update();

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
                    var lcid = Application.CurrentCulture.LCID;
                    var session = TaxonomySession.GetTaxonomySession(context);
                    var store = session.TermStores.GetByName("Managed Metadata Service");
                    var group = store.Groups.GetByName("Managed Code");
                    var set = group.TermSets.GetByName("Projects");
                    var term = set.Terms.GetByName("Alan Parsons Project");

                    context.Load(term);
                    context.ExecuteQuery();

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
                    var field = list.Fields.GetByInternalNameOrTitle("Project");
                    var taxField = context.CastTo<TaxonomyField>(field);
                    taxField.SetFieldValueByTerm(item, term, lcid);
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

        private void PermissionsButton_Click(object sender, EventArgs e)
        {
            var siteUrl = "http://localhost/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                try
                {
                    var web = context.Web;
                    var list = web.Lists.GetByTitle("Project Documents");
                    context.Load(list, l => l.EffectiveBasePermissions);

                    var mask = new BasePermissions();
                    mask.Set(PermissionKind.ManageLists);
                    var manageLists = web.DoesUserHavePermissions(mask);

                    context.ExecuteQuery();

                    var addListItems = list.EffectiveBasePermissions.Has(PermissionKind.AddListItems);
                    ResultsListBox.Items.Add("Manage Lists: " + manageLists.Value);
                    ResultsListBox.Items.Add("Add items to Project Documents: " + addListItems);
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

        private void ProfileButton_Click(object sender, EventArgs e)
        {
            var siteUrl = "http://localhost/sites/demo";
            using (var context = new ClientContext(siteUrl))
            {
                try
                {
                    var manager = new PeopleManager(context);
                    var profile = manager.GetMyProperties();
                    context.Load(profile, p => p.DisplayName, p => p.UserProfileProperties);
                    context.ExecuteQuery();

                    ResultsListBox.Items.Add("User profile properties for " + profile.DisplayName);
                    foreach (var key in profile.UserProfileProperties.Keys)
                    {
                        var value = profile.UserProfileProperties[key];
                        if (!string.IsNullOrWhiteSpace(value))
                        {
                            ResultsListBox.Items.Add(key + ": " + value);
                        }
                    }
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
