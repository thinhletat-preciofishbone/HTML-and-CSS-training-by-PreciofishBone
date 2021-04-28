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
        Me.RestJsonButton = New System.Windows.Forms.Button()
        Me.RestXmlButton = New System.Windows.Forms.Button()
        Me.LoadQueryButton = New System.Windows.Forms.Button()
        Me.LoadButton = New System.Windows.Forms.Button()
        Me.ResultsListBox = New System.Windows.Forms.ListBox()
        Me.SuspendLayout()
        '
        'RestJsonButton
        '
        Me.RestJsonButton.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.RestJsonButton.Location = New System.Drawing.Point(371, 108)
        Me.RestJsonButton.Name = "RestJsonButton"
        Me.RestJsonButton.Size = New System.Drawing.Size(133, 26)
        Me.RestJsonButton.TabIndex = 9
        Me.RestJsonButton.Text = "REST JSON"
        Me.RestJsonButton.UseVisualStyleBackColor = True
        '
        'RestXmlButton
        '
        Me.RestXmlButton.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.RestXmlButton.Location = New System.Drawing.Point(371, 76)
        Me.RestXmlButton.Name = "RestXmlButton"
        Me.RestXmlButton.Size = New System.Drawing.Size(133, 26)
        Me.RestXmlButton.TabIndex = 8
        Me.RestXmlButton.Text = "REST XML"
        Me.RestXmlButton.UseVisualStyleBackColor = True
        '
        'LoadQueryButton
        '
        Me.LoadQueryButton.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.LoadQueryButton.Location = New System.Drawing.Point(371, 44)
        Me.LoadQueryButton.Name = "LoadQueryButton"
        Me.LoadQueryButton.Size = New System.Drawing.Size(133, 26)
        Me.LoadQueryButton.TabIndex = 7
        Me.LoadQueryButton.Text = "LoadQuery"
        Me.LoadQueryButton.UseVisualStyleBackColor = True
        '
        'LoadButton
        '
        Me.LoadButton.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.LoadButton.Location = New System.Drawing.Point(371, 12)
        Me.LoadButton.Name = "LoadButton"
        Me.LoadButton.Size = New System.Drawing.Size(133, 26)
        Me.LoadButton.TabIndex = 6
        Me.LoadButton.Text = "Load"
        Me.LoadButton.UseVisualStyleBackColor = True
        '
        'ResultsListBox
        '
        Me.ResultsListBox.Anchor = CType((((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Bottom) _
            Or System.Windows.Forms.AnchorStyles.Left) _
            Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.ResultsListBox.FormattingEnabled = True
        Me.ResultsListBox.ItemHeight = 16
        Me.ResultsListBox.Location = New System.Drawing.Point(12, 12)
        Me.ResultsListBox.Name = "ResultsListBox"
        Me.ResultsListBox.Size = New System.Drawing.Size(341, 388)
        Me.ResultsListBox.TabIndex = 5
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(8.0!, 16.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(516, 413)
        Me.Controls.Add(Me.RestJsonButton)
        Me.Controls.Add(Me.RestXmlButton)
        Me.Controls.Add(Me.LoadQueryButton)
        Me.Controls.Add(Me.LoadButton)
        Me.Controls.Add(Me.ResultsListBox)
        Me.Font = New System.Drawing.Font("Microsoft Sans Serif", 10.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Margin = New System.Windows.Forms.Padding(4)
        Me.Name = "Form1"
        Me.Text = "Managed Code Demos (VB)"
        Me.ResumeLayout(False)

    End Sub
    Private WithEvents RestJsonButton As System.Windows.Forms.Button
    Private WithEvents RestXmlButton As System.Windows.Forms.Button
    Private WithEvents LoadQueryButton As System.Windows.Forms.Button
    Private WithEvents LoadButton As System.Windows.Forms.Button
    Private WithEvents ResultsListBox As System.Windows.Forms.ListBox

End Class
