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
            this.ResultsListBox = new System.Windows.Forms.ListBox();
            this.LoadButton = new System.Windows.Forms.Button();
            this.LoadQueryButton = new System.Windows.Forms.Button();
            this.RestXmlButton = new System.Windows.Forms.Button();
            this.RestJsonButton = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // ResultsListBox
            // 
            this.ResultsListBox.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.ResultsListBox.FormattingEnabled = true;
            this.ResultsListBox.ItemHeight = 16;
            this.ResultsListBox.Location = new System.Drawing.Point(12, 12);
            this.ResultsListBox.Name = "ResultsListBox";
            this.ResultsListBox.Size = new System.Drawing.Size(341, 388);
            this.ResultsListBox.TabIndex = 0;
            // 
            // LoadButton
            // 
            this.LoadButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.LoadButton.Location = new System.Drawing.Point(371, 12);
            this.LoadButton.Name = "LoadButton";
            this.LoadButton.Size = new System.Drawing.Size(133, 26);
            this.LoadButton.TabIndex = 1;
            this.LoadButton.Text = "Load";
            this.LoadButton.UseVisualStyleBackColor = true;
            this.LoadButton.Click += new System.EventHandler(this.LoadButton_Click);
            // 
            // LoadQueryButton
            // 
            this.LoadQueryButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.LoadQueryButton.Location = new System.Drawing.Point(371, 44);
            this.LoadQueryButton.Name = "LoadQueryButton";
            this.LoadQueryButton.Size = new System.Drawing.Size(133, 26);
            this.LoadQueryButton.TabIndex = 2;
            this.LoadQueryButton.Text = "LoadQuery";
            this.LoadQueryButton.UseVisualStyleBackColor = true;
            this.LoadQueryButton.Click += new System.EventHandler(this.LoadQueryButton_Click);
            // 
            // RestXmlButton
            // 
            this.RestXmlButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.RestXmlButton.Location = new System.Drawing.Point(371, 76);
            this.RestXmlButton.Name = "RestXmlButton";
            this.RestXmlButton.Size = new System.Drawing.Size(133, 26);
            this.RestXmlButton.TabIndex = 3;
            this.RestXmlButton.Text = "REST XML";
            this.RestXmlButton.UseVisualStyleBackColor = true;
            this.RestXmlButton.Click += new System.EventHandler(this.RestXmlButton_Click);
            // 
            // RestJsonButton
            // 
            this.RestJsonButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.RestJsonButton.Location = new System.Drawing.Point(371, 108);
            this.RestJsonButton.Name = "RestJsonButton";
            this.RestJsonButton.Size = new System.Drawing.Size(133, 26);
            this.RestJsonButton.TabIndex = 4;
            this.RestJsonButton.Text = "REST JSON";
            this.RestJsonButton.UseVisualStyleBackColor = true;
            this.RestJsonButton.Click += new System.EventHandler(this.RestJsonButton_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(516, 413);
            this.Controls.Add(this.RestJsonButton);
            this.Controls.Add(this.RestXmlButton);
            this.Controls.Add(this.LoadQueryButton);
            this.Controls.Add(this.LoadButton);
            this.Controls.Add(this.ResultsListBox);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Name = "Form1";
            this.Text = "Managed Code Demos";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.ListBox ResultsListBox;
        private System.Windows.Forms.Button LoadButton;
        private System.Windows.Forms.Button LoadQueryButton;
        private System.Windows.Forms.Button RestXmlButton;
        private System.Windows.Forms.Button RestJsonButton;
    }
}

