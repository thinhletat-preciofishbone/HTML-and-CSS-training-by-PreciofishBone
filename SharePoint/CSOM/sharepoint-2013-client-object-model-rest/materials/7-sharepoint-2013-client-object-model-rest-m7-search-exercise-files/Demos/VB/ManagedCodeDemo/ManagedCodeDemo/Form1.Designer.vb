<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form1
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.ResultsListBox = New System.Windows.Forms.ListBox()
        Me.SearchButton = New System.Windows.Forms.Button()
        Me.ProfileButton = New System.Windows.Forms.Button()
        Me.PermissionsButton = New System.Windows.Forms.Button()
        Me.DocumentButton = New System.Windows.Forms.Button()
        Me.LibraryButton = New System.Windows.Forms.Button()
        Me.TermsButton = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'ResultsListBox
        '
        Me.ResultsListBox.Anchor = CType((((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Bottom) _
            Or System.Windows.Forms.AnchorStyles.Left) _
            Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.ResultsListBox.FormattingEnabled = True
        Me.ResultsListBox.ItemHeight = 16
        Me.ResultsListBox.Location = New System.Drawing.Point(10, 12)
        Me.ResultsListBox.Name = "ResultsListBox"
        Me.ResultsListBox.Size = New System.Drawing.Size(345, 388)
        Me.ResultsListBox.TabIndex = 15
        '
        'SearchButton
        '
        Me.SearchButton.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.SearchButton.Location = New System.Drawing.Point(371, 190)
        Me.SearchButton.Name = "SearchButton"
        Me.SearchButton.Size = New System.Drawing.Size(133, 26)
        Me.SearchButton.TabIndex = 21
        Me.SearchButton.Text = "Search"
        Me.SearchButton.UseVisualStyleBackColor = True
        '
        'ProfileButton
        '
        Me.ProfileButton.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.ProfileButton.Location = New System.Drawing.Point(371, 158)
        Me.ProfileButton.Name = "ProfileButton"
        Me.ProfileButton.Size = New System.Drawing.Size(133, 26)
        Me.ProfileButton.TabIndex = 20
        Me.ProfileButton.Text = "User Profile"
        Me.ProfileButton.UseVisualStyleBackColor = True
        '
        'PermissionsButton
        '
        Me.PermissionsButton.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.PermissionsButton.Location = New System.Drawing.Point(371, 108)
        Me.PermissionsButton.Name = "PermissionsButton"
        Me.PermissionsButton.Size = New System.Drawing.Size(133, 44)
        Me.PermissionsButton.TabIndex = 19
        Me.PermissionsButton.Text = "Check Permissions"
        Me.PermissionsButton.UseVisualStyleBackColor = True
        '
        'DocumentButton
        '
        Me.DocumentButton.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.DocumentButton.Location = New System.Drawing.Point(371, 76)
        Me.DocumentButton.Name = "DocumentButton"
        Me.DocumentButton.Size = New System.Drawing.Size(133, 26)
        Me.DocumentButton.TabIndex = 18
        Me.DocumentButton.Text = "Upload Document"
        Me.DocumentButton.UseVisualStyleBackColor = True
        '
        'LibraryButton
        '
        Me.LibraryButton.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.LibraryButton.Location = New System.Drawing.Point(371, 44)
        Me.LibraryButton.Name = "LibraryButton"
        Me.LibraryButton.Size = New System.Drawing.Size(133, 26)
        Me.LibraryButton.TabIndex = 17
        Me.LibraryButton.Text = "Create Library"
        Me.LibraryButton.UseVisualStyleBackColor = True
        '
        'TermsButton
        '
        Me.TermsButton.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.TermsButton.Location = New System.Drawing.Point(371, 12)
        Me.TermsButton.Name = "TermsButton"
        Me.TermsButton.Size = New System.Drawing.Size(133, 26)
        Me.TermsButton.TabIndex = 16
        Me.TermsButton.Text = "Create Terms"
        Me.TermsButton.UseVisualStyleBackColor = True
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(8.0!, 16.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(516, 413)
        Me.Controls.Add(Me.SearchButton)
        Me.Controls.Add(Me.ProfileButton)
        Me.Controls.Add(Me.PermissionsButton)
        Me.Controls.Add(Me.DocumentButton)
        Me.Controls.Add(Me.LibraryButton)
        Me.Controls.Add(Me.TermsButton)
        Me.Controls.Add(Me.ResultsListBox)
        Me.Font = New System.Drawing.Font("Microsoft Sans Serif", 10.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Margin = New System.Windows.Forms.Padding(4)
        Me.Name = "Form1"
        Me.Text = "Managed Code Demos (VB)"
        Me.ResumeLayout(False)

    End Sub
    Private WithEvents ResultsListBox As System.Windows.Forms.ListBox
    Private WithEvents SearchButton As System.Windows.Forms.Button
    Private WithEvents ProfileButton As System.Windows.Forms.Button
    Private WithEvents PermissionsButton As System.Windows.Forms.Button
    Private WithEvents DocumentButton As System.Windows.Forms.Button
    Private WithEvents LibraryButton As System.Windows.Forms.Button
    Private WithEvents TermsButton As System.Windows.Forms.Button

End Class
