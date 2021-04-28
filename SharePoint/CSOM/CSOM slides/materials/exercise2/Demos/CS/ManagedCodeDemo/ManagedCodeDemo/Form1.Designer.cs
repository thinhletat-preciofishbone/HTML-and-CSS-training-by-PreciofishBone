namespace ManagedCodeDemo
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.LoadButton = new System.Windows.Forms.Button();
            this.ResultsListBox = new System.Windows.Forms.ListBox();
            this.NestedIncludesButton = new System.Windows.Forms.Button();
            this.CamlQueryButton = new System.Windows.Forms.Button();
            this.BindingButton = new System.Windows.Forms.Button();
            this.CreateListButton = new System.Windows.Forms.Button();
            this.BatchExceptionButton = new System.Windows.Forms.Button();
            this.CreateItemButton = new System.Windows.Forms.Button();
            this.UpdateItemButton = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // LoadButton
            // 
            this.LoadButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.LoadButton.Location = new System.Drawing.Point(371, 12);
            this.LoadButton.Name = "LoadButton";
            this.LoadButton.Size = new System.Drawing.Size(133, 26);
            this.LoadButton.TabIndex = 1;
            this.LoadButton.Text = "Load / Include";
            this.LoadButton.UseVisualStyleBackColor = true;
            this.LoadButton.Click += new System.EventHandler(this.LoadButton_Click);
            // 
            // ResultsListBox
            // 
            this.ResultsListBox.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.ResultsListBox.FormattingEnabled = true;
            this.ResultsListBox.ItemHeight = 16;
            this.ResultsListBox.Location = new System.Drawing.Point(8, 8);
            this.ResultsListBox.Name = "ResultsListBox";
            this.ResultsListBox.Size = new System.Drawing.Size(345, 388);
            this.ResultsListBox.TabIndex = 6;
            // 
            // NestedIncludesButton
            // 
            this.NestedIncludesButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.NestedIncludesButton.Location = new System.Drawing.Point(371, 44);
            this.NestedIncludesButton.Name = "NestedIncludesButton";
            this.NestedIncludesButton.Size = new System.Drawing.Size(133, 26);
            this.NestedIncludesButton.TabIndex = 7;
            this.NestedIncludesButton.Text = "Nested Includes";
            this.NestedIncludesButton.UseVisualStyleBackColor = true;
            this.NestedIncludesButton.Click += new System.EventHandler(this.NestedIncludesButton_Click);
            // 
            // CamlQueryButton
            // 
            this.CamlQueryButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.CamlQueryButton.Location = new System.Drawing.Point(371, 76);
            this.CamlQueryButton.Name = "CamlQueryButton";
            this.CamlQueryButton.Size = new System.Drawing.Size(133, 26);
            this.CamlQueryButton.TabIndex = 8;
            this.CamlQueryButton.Text = "CAML Queries";
            this.CamlQueryButton.UseVisualStyleBackColor = true;
            this.CamlQueryButton.Click += new System.EventHandler(this.CamlQueryButton_Click);
            // 
            // BindingButton
            // 
            this.BindingButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.BindingButton.Location = new System.Drawing.Point(371, 108);
            this.BindingButton.Name = "BindingButton";
            this.BindingButton.Size = new System.Drawing.Size(133, 26);
            this.BindingButton.TabIndex = 9;
            this.BindingButton.Text = "Data-binding";
            this.BindingButton.UseVisualStyleBackColor = true;
            this.BindingButton.Click += new System.EventHandler(this.BindingButton_Click);
            // 
            // CreateListButton
            // 
            this.CreateListButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.CreateListButton.Location = new System.Drawing.Point(371, 140);
            this.CreateListButton.Name = "CreateListButton";
            this.CreateListButton.Size = new System.Drawing.Size(133, 26);
            this.CreateListButton.TabIndex = 10;
            this.CreateListButton.Text = "Create List";
            this.CreateListButton.UseVisualStyleBackColor = true;
            this.CreateListButton.Click += new System.EventHandler(this.CreateListButton_Click);
            // 
            // BatchExceptionButton
            // 
            this.BatchExceptionButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.BatchExceptionButton.Location = new System.Drawing.Point(371, 172);
            this.BatchExceptionButton.Name = "BatchExceptionButton";
            this.BatchExceptionButton.Size = new System.Drawing.Size(133, 43);
            this.BatchExceptionButton.TabIndex = 11;
            this.BatchExceptionButton.Text = "Batch Exception Handling";
            this.BatchExceptionButton.UseVisualStyleBackColor = true;
            this.BatchExceptionButton.Click += new System.EventHandler(this.BatchExceptionButton_Click);
            // 
            // CreateItemButton
            // 
            this.CreateItemButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.CreateItemButton.Location = new System.Drawing.Point(371, 221);
            this.CreateItemButton.Name = "CreateItemButton";
            this.CreateItemButton.Size = new System.Drawing.Size(133, 26);
            this.CreateItemButton.TabIndex = 12;
            this.CreateItemButton.Text = "Create Item";
            this.CreateItemButton.UseVisualStyleBackColor = true;
            this.CreateItemButton.Click += new System.EventHandler(this.CreateItemButton_Click);
            // 
            // UpdateItemButton
            // 
            this.UpdateItemButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.UpdateItemButton.Location = new System.Drawing.Point(371, 253);
            this.UpdateItemButton.Name = "UpdateItemButton";
            this.UpdateItemButton.Size = new System.Drawing.Size(133, 26);
            this.UpdateItemButton.TabIndex = 13;
            this.UpdateItemButton.Text = "Update Item";
            this.UpdateItemButton.UseVisualStyleBackColor = true;
            this.UpdateItemButton.Click += new System.EventHandler(this.UpdateItemButton_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(516, 413);
            this.Controls.Add(this.UpdateItemButton);
            this.Controls.Add(this.CreateItemButton);
            this.Controls.Add(this.BatchExceptionButton);
            this.Controls.Add(this.CreateListButton);
            this.Controls.Add(this.BindingButton);
            this.Controls.Add(this.CamlQueryButton);
            this.Controls.Add(this.NestedIncludesButton);
            this.Controls.Add(this.ResultsListBox);
            this.Controls.Add(this.LoadButton);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Margin = new System.Windows.Forms.Padding(4);
            this.Name = "Form1";
            this.Text = "Managed Code Demos";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button LoadButton;
        private System.Windows.Forms.ListBox ResultsListBox;
        private System.Windows.Forms.Button NestedIncludesButton;
        private System.Windows.Forms.Button CamlQueryButton;
        private System.Windows.Forms.Button BindingButton;
        private System.Windows.Forms.Button CreateListButton;
        private System.Windows.Forms.Button BatchExceptionButton;
        private System.Windows.Forms.Button CreateItemButton;
        private System.Windows.Forms.Button UpdateItemButton;
    }
}

