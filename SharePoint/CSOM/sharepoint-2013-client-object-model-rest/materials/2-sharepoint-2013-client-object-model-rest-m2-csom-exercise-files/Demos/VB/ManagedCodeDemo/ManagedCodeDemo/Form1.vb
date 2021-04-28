Imports Microsoft.SharePoint.Client
Imports System.Net
Imports System.Web.Script.Serialization

Public Class Form1
    Private Sub LoadButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles LoadButton.Click
        ResultsListBox.DataSource = Nothing

        Dim siteUrl = "http://localhost/sites/demo"
        Using context = New ClientContext(siteUrl)
            Dim web = context.Web
            context.Load(web, Function(w) w.Title, Function(w) w.Description)

            Dim query = From list In web.Lists.Include(Function(l) l.Title)
                        Where list.Hidden = False AndAlso list.ItemCount > 0
                        Select list
            Dim lists = context.LoadQuery(query)
            context.ExecuteQuery()

            ResultsListBox.Items.Add(web.Title)
            For Each list In lists
                ResultsListBox.Items.Add(list.Title)
            Next list
        End Using
    End Sub

    Private Sub NestedIncludesButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles NestedIncludesButton.Click
        ResultsListBox.DataSource = Nothing

        Dim siteUrl = "http://localhost/sites/demo"
        Using context = New ClientContext(siteUrl)
            Dim web = context.Web
            Dim lists = web.Lists
            context.Load(lists, Function(lc) lc.Include(Function(l) l.Title, Function(l) l.Fields.Include(Function(f) f.Title)))
            context.ExecuteQuery()

            For Each list In lists
                ResultsListBox.Items.Add(list.Title)
                For Each field In list.Fields
                    ResultsListBox.Items.Add(vbTab & field.Title)
                Next field
            Next list
        End Using
    End Sub

    Private Sub CamlQueryButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles CamlQueryButton.Click
        ResultsListBox.DataSource = Nothing

        Dim siteUrl = "http://localhost/sites/demo"
        Using context = New ClientContext(siteUrl)
            Dim web = context.Web
            Dim list = web.Lists.GetByTitle("Products")

            Dim xml = <View>
                          <Query>
                              <Where>
                                  <Eq>
                                      <FieldRef Name='Category' LookupId='True'/>
                                      <Value Type='Lookup'>1</Value>
                                  </Eq>
                              </Where>
                          </Query>
                      </View>

            Dim query = New CamlQuery()
            query.ViewXml = xml.ToString()
            Dim items = list.GetItems(query)
            context.Load(list, Function(l) l.Title)
            context.Load(items, Function(c) c.Include(Function(li) li("ID"), Function(li) li("Title")))
            context.ExecuteQuery()

            ResultsListBox.Items.Add(list.Title)
            For Each item In items
                ResultsListBox.Items.Add(item("Title"))
            Next item
        End Using
    End Sub

    Private Sub BindingButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles BindingButton.Click
        ResultsListBox.DataSource = Nothing

        Dim siteUrl = "http://localhost/sites/demo"
        Using context = New ClientContext(siteUrl)
            Dim web = context.Web
            Dim list = web.Lists.GetByTitle("Products")

            Dim xml = <View>
                          <Query>
                              <Where>
                                  <Eq>
                                      <FieldRef Name='Category' LookupId='True'/>
                                      <Value Type='Lookup'>1</Value>
                                  </Eq>
                              </Where>
                          </Query>
                      </View>

            Dim query = New CamlQuery()
            query.ViewXml = xml.ToString()
            Dim items = list.GetItems(query)
            context.Load(items, Function(c) c.Include(Function(li) li("ID"), Function(li) li("Title")))
            context.ExecuteQuery()

            Dim listData = New List(Of DictionaryEntry)()
            For Each item In items
                Dim data = New DictionaryEntry(item("ID"), item("Title"))
                listData.Add(data)
            Next item

            ResultsListBox.DataSource = listData
            ResultsListBox.DisplayMember = "Value"
            ResultsListBox.ValueMember = "Key"
        End Using

    End Sub

    Private Sub CreateListButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles CreateListButton.Click
        ResultsListBox.DataSource = Nothing

        Dim siteUrl = "http://localhost/sites/demo"
        Using context = New ClientContext(siteUrl)
            Try
                Dim web = context.Web
                Dim lci = New ListCreationInformation()
                lci.Title = "Tasks"
                lci.QuickLaunchOption = QuickLaunchOptions.On
                lci.TemplateType = CInt(ListTemplateType.Tasks)
                Dim list = web.Lists.Add(lci)

                context.ExecuteQuery()

                ResultsListBox.Items.Add("List added")
            Catch ex As Exception
                Dim message = ex.GetType().ToString() & Environment.NewLine & ex.ToString()
                MessageBox.Show(message)
            End Try
        End Using
    End Sub

    Private Sub BatchExceptionButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles BatchExceptionBbutton.Click
        ResultsListBox.DataSource = Nothing

        Dim siteUrl = "http://localhost/sites/demo"
        Using context = New ClientContext(siteUrl)
            Try
                Dim web = context.Web
                Dim list As List = Nothing
                Dim scope = New ExceptionHandlingScope(context)

                Using scope.StartScope()
                    Using scope.StartTry()
                        list = web.Lists.GetByTitle("Tasks")
                        context.Load(list)
                    End Using

                    Using scope.StartCatch()
                        Dim lci = New ListCreationInformation()
                        lci.Title = "Tasks"
                        lci.QuickLaunchOption = QuickLaunchOptions.On
                        lci.TemplateType = CInt(ListTemplateType.Tasks)
                        list = web.Lists.Add(lci)
                    End Using

                    Using scope.StartFinally()
                        list = web.Lists.GetByTitle("Tasks")
                        context.Load(list)
                    End Using
                End Using


                context.ExecuteQuery()

                Dim status = If(scope.HasException, " created", " loaded")
                ResultsListBox.Items.Add(list.Title + status)
            Catch ex As Exception
                Dim message = ex.GetType().ToString() & Environment.NewLine & ex.ToString()
                MessageBox.Show(message)
            End Try
        End Using
    End Sub

    Private Sub CreateItemButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles CreateItemButton.Click
        ResultsListBox.DataSource = Nothing

        Dim siteUrl = "http://localhost/sites/demo"
        Using context = New ClientContext(siteUrl)
            Try
                Dim web = context.Web
                Dim list = web.Lists.GetByTitle("Tasks")

                Dim ici = New ListItemCreationInformation()
                Dim item = list.AddItem(ici)
                item("Title") = "Sample Task"
                item("AssignedTo") = web.CurrentUser
                item("DueDate") = Date.Now.AddDays(7)
                item.Update()

                context.ExecuteQuery()

                ResultsListBox.Items.Add("Item added")
            Catch ex As Exception
                Dim message = ex.GetType().ToString() & Environment.NewLine & ex.ToString()
                MessageBox.Show(message)
            End Try
        End Using
    End Sub

    Private Sub UpdateItemButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles UpdateItemButton.Click
        ResultsListBox.DataSource = Nothing

        Dim siteUrl = "http://localhost/sites/demo"
        Using context = New ClientContext(siteUrl)
            Try
                Dim web = context.Web
                Dim list = web.Lists.GetByTitle("Tasks")

                Dim query = New CamlQuery()
                query.ViewXml = "<View><RowLimit>1</RowLimit></View>"
                Dim items = list.GetItems(query)
                context.Load(items)
                context.ExecuteQuery()

                Dim item = items.FirstOrDefault()
                If item IsNot Nothing Then
                    item("Status") = "In Progress"
                    item("PercentComplete") = 0.1
                    item.Update()
                End If
                context.ExecuteQuery()

                ResultsListBox.Items.Add("Item updated")
            Catch ex As Exception
                Dim message = ex.GetType().ToString() & Environment.NewLine & ex.ToString()
                MessageBox.Show(message)
            End Try
        End Using
    End Sub

End Class
