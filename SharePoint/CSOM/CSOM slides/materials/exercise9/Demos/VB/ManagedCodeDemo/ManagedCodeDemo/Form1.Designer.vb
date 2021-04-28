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
        Me.ListDataButton = New System.Windows.Forms.Button()
        Me.ProfileButton = New System.Windows.Forms.Button()
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
        'ListDataButton
        '
        Me.ListDataButton.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.ListDataButton.Location = New System.Drawing.Point(371, 44)
        Me.ListDataButton.Name = "ListDataButton"
        Me.ListDataButton.Size = New System.Drawing.Size(133, 26)
        Me.ListDataButton.TabIndex = 17
        Me.ListDataButton.Text = "ListData.svc"
        Me.ListDataButton.UseVisualStyleBackColor = True
        '
        'ProfileButton
        '
        Me.ProfileButton.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.ProfileButton.Location = New System.Drawing.Point(371, 12)
        Me.ProfileButton.Name = "ProfileButton"
        Me.ProfileButton.Size = New System.Drawing.Size(133, 26)
        Me.ProfileButton.TabIndex = 16
        Me.ProfileButton.Text = "User Profile"
        Me.ProfileButton.UseVisualStyleBackColor = True
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(8.0!, 16.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(516, 413)
        Me.Controls.Add(Me.ListDataButton)
        Me.Controls.Add(Me.ProfileButton)
        Me.Controls.Add(Me.ResultsListBox)
        Me.Font = New System.Drawing.Font("Microsoft Sans Serif", 10.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Margin = New System.Windows.Forms.Padding(4)
        Me.Name = "Form1"
        Me.Text = "Managed Code Demos (VB)"
        Me.ResumeLayout(False)

    End Sub
    Private WithEvents ResultsListBox As System.Windows.Forms.ListBox
    Private WithEvents ListDataButton As System.Windows.Forms.Button
    Private WithEvents ProfileButton As System.Windows.Forms.Button

End Class
