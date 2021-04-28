Imports Microsoft.SharePoint.Client
Imports System.Net
Imports System.Web.Script.Serialization
Imports Microsoft.SharePoint.Client.Taxonomy
Imports Microsoft.SharePoint.Client.UserProfiles
Imports Microsoft.SharePoint.Client.Search.Query
Imports System.Security.Principal

Public Class Form1

    Private Sub ProfileButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles ProfileButton.Click
        Dim userName = WindowsIdentity.GetCurrent().Name
        Dim proxy = New UserProfileProxy.UserProfileService()
        proxy.UseDefaultCredentials = True
        proxy.Url = "http://localhost/sites/demo/_vti_bin/userprofileservice.asmx"
        Dim props = proxy.GetUserProfileByName(userName)
        ResultsListBox.Items.Add("User profile properties for " & userName)
        For i As Integer = 0 To props.Length - 1
            Dim item = props(i)
            Dim value = If(item.Values.Length > 0, item.Values(0).Value, Nothing)
            If value IsNot Nothing Then
                ResultsListBox.Items.Add(item.Name & ": " & value.ToString())
            End If
        Next i
    End Sub

    Private Sub ListDataButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles ListDataButton.Click
        Dim serviceUrl = "http://localhost/sites/demo/_vti_bin/ListData.svc"
        Dim context = New DemoProxy.DemoDataContext(New Uri(serviceUrl))
        context.Credentials = System.Net.CredentialCache.DefaultCredentials

        Dim category = "Beverages"
        Dim products = From product In context.Products
                       Where product.UnitsInStock > 0 AndAlso product.Category.Title = category
                       Select product

        ResultsListBox.Items.Add(category)
        For Each product In products
            ResultsListBox.Items.Add(product.Title)
        Next product

    End Sub

End Class
