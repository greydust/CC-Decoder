using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, object>> Data = new Dictionary<string, Dictionary<string, object>>();
            // get all files in raw data
            string[] files = Directory.GetFiles("RawData");
            Directory.CreateDirectory("ConvertedData");
            foreach (string file in files)
            {
                string rawData = File.ReadAllText(file);
                Dictionary<string, object> rawDataDict = MiniJSON.Json.Deserialize(rawData) as Dictionary<string, object>;
                string convertedData = MiniJSON.Json.Serialize(rawDataDict);
                string unescapedData = Utilities.UnescapeUnicodeString(convertedData);
                File.WriteAllText("ConvertedData/" + Path.GetFileNameWithoutExtension(file) + ".converted", unescapedData);
            }
        }
    }
}
