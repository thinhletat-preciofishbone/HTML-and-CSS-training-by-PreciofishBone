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
            this.DocumentButton = new System.Windows.Forms.Button();
            this.LibraryButton = new System.Windows.Forms.Button();
            this.TermsButton = new System.Windows.Forms.Button();
            this.SuspendLayout();
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
            // DocumentButton
            // 
            this.DocumentButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.DocumentButton.Location = new System.Drawing.Point(371, 76);
            this.DocumentButton.Name = "DocumentButton";
            this.DocumentButton.Size = new System.Drawing.Size(133, 26);
            this.DocumentButton.TabIndex = 11;
            this.DocumentButton.Text = "Upload Document";
            this.DocumentButton.UseVisualStyleBackColor = true;
            this.DocumentButton.Click += new System.EventHandler(this.DocumentButton_Click);
            // 
            // LibraryButton
            // 
            this.LibraryButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.LibraryButton.Location = new System.Drawing.Point(371, 44);
            this.LibraryButton.Name = "LibraryButton";
            this.LibraryButton.Size = new System.Drawing.Size(133, 26);
            this.LibraryButton.TabIndex = 10;
            this.LibraryButton.Text = "Create Library";
            this.LibraryButton.UseVisualStyleBackColor = true;
            this.LibraryButton.Click += new System.EventHandler(this.LibraryButton_Click);
            // 
            // TermsButton
            // 
            this.TermsButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.TermsButton.Location = new System.Drawing.Point(371, 12);
            this.TermsButton.Name = "TermsButton";
            this.TermsButton.Size = new System.Drawing.Size(133, 26);
            this.TermsButton.TabIndex = 12;
            this.TermsButton.Text = "Create Terms";
            this.TermsButton.UseVisualStyleBackColor = true;
            this.TermsButton.Click += new System.EventHandler(this.TermsButton_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(516, 413);
            this.Controls.Add(this.TermsButton);
            this.Controls.Add(this.DocumentButton);
            this.Controls.Add(this.LibraryButton);
            this.Controls.Add(this.ResultsListBox);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Margin = new System.Windows.Forms.Padding(4);
            this.Name = "Form1";
            this.Text = "Managed Code Demos";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.ListBox ResultsListBox;
        private System.Windows.Forms.Button DocumentButton;
        private System.Windows.Forms.Button LibraryButton;
        private System.Windows.Forms.Button TermsButton;
    }
}

