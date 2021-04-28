Imports Microsoft.SharePoint.Client
Imports System.Net
Imports System.Web.Script.Serialization

Public Class Form1
    Private Sub LibraryButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles LibraryButton.Click
        Dim siteUrl = "http://localhost/sites/demo"
        Using context = New ClientContext(siteUrl)
            Try
                Dim web = context.Web
                Dim lci = New ListCreationInformation()
                lci.Title = "Project Documents"
                lci.TemplateType = CInt(ListTemplateType.DocumentLibrary)
                Dim list = web.Lists.Add(lci)

                list.Fields.AddFieldAsXml("<Field Type=""Number"" DisplayName=""Year"" Name=""Year"" Min=""2000"" Max=""2100"" Decimals=""0"" />", True, AddFieldOptions.DefaultValue)
                list.Fields.AddFieldAsXml("<Field Type=""User"" DisplayName=""Coordinator"" Name=""Coordinator"" List=""UserInfo"" ShowField=""ImnName"" UserSelectionMode=""PeopleOnly"" UserSelectionScope=""0"" />", True, AddFieldOptions.DefaultValue)

                context.ExecuteQuery()

                ResultsListBox.Items.Add("List added")
            Catch ex As Exception
                Dim message = ex.GetType().ToString() & Environment.NewLine & ex.ToString()
                MessageBox.Show(message)
            End Try
        End Using
    End Sub

    Private Sub DocumentButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles DocumentButton.Click
        Dim siteUrl = "http://localhost/sites/demo"
        Using context = New ClientContext(siteUrl)
            Try
                Dim web = context.Web
                Dim list = web.Lists.GetByTitle("Project Documents")

                Dim filePath = Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory) & "\Samples\Sample01.docx"
                Dim fci = New FileCreationInformation()
                fci.Content = System.IO.File.ReadAllBytes(filePath)
                fci.Url = "Sample01.docx"
                fci.Overwrite = True
                Dim file = list.RootFolder.Files.Add(fci)

                Dim item = file.ListItemAllFields
                item("Year") = Date.Now.Year
                item("Coordinator") = web.CurrentUser
                item.Update()


                context.ExecuteQuery()

                ResultsListBox.Items.Add("Document uploaded")
            Catch ex As Exception
                Dim message = ex.GetType().ToString() & Environment.NewLine & ex.ToString()
                MessageBox.Show(message)
            End Try
        End Using
    End Sub
End Class
