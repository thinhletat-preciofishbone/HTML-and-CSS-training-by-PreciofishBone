Imports Microsoft.SharePoint.Client
Imports System.Net
Imports System.Web.Script.Serialization

Public Class Form1
    Private Sub LoadButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles LoadButton.Click
        Dim siteUrl = "http://localhost/sites/demo"
        Using context = New ClientContext(siteUrl)
            Dim web = context.Web
            context.Load(web)
            context.Load(web.Lists)
            context.ExecuteQuery()
            ResultsListBox.Items.Add(web.Title)
            ResultsListBox.Items.Add(web.Lists.Count)
        End Using
    End Sub

    Private Sub LoadQueryButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles LoadQueryButton.Click
        Dim siteUrl = "http://localhost/sites/demo"
        Using context = New ClientContext(siteUrl)
            Dim web = context.Web

            Dim query = From list In web.Lists
                        Where list.Hidden = False AndAlso
                            list.ItemCount > 0
                        Select list
            Dim lists = context.LoadQuery(query)
            context.ExecuteQuery()

            ResultsListBox.Items.Add(lists.Count())
        End Using
    End Sub

    Private Sub RestXmlButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles RestXmlButton.Click
        Dim url = "http://localhost/sites/demo/_api/Web/"
        Dim client = New WebClient()
        client.UseDefaultCredentials = True
        Dim xml = client.DownloadString(url)

        Dim doc = XDocument.Parse(xml)
        Dim ds As XNamespace = "http://schemas.microsoft.com/" & "ado/2007/08/dataservices"
        Dim titles = doc.Descendants(ds + "Title")
        Dim title = titles.First().Value

        ResultsListBox.Items.Add(title)
    End Sub

    Private Sub RestJsonButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles RestJsonButton.Click
        Dim url = "http://localhost/sites/demo/_api/Web/"
        Dim client = New WebClient()
        client.UseDefaultCredentials = True
        client.Headers(HttpRequestHeader.Accept) =
            "application/json;odata=verbose"
        Dim json = client.DownloadString(url)

        Dim ser = New JavaScriptSerializer()
        Dim item = ser.Deserialize(Of Object)(json)

        ResultsListBox.Items.Add(item("d")("Title"))
    End Sub
End Class
