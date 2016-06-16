using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;

namespace Decoder
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        Dictionary<string, Dictionary<string, object>> Data = new Dictionary<string, Dictionary<string, object>>();
        private void Form1_Load(object sender, EventArgs e)
        {
            // get all files in raw data
            string[] files = Directory.GetFiles("RawData");
            foreach (string file in files)
            {
                string data = Utilities.EscapeUnicodeString(File.ReadAllText(file));
                File.WriteAllText(file, data);
                Dictionary<string, object> convertedData = MiniJSON.Json.Deserialize(data) as Dictionary<string, object>;
                Data.Add(Path.GetFileNameWithoutExtension(file), convertedData);
            }

            int a = 0;
        }
    }
}
