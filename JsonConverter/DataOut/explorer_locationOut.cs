using JsonConverter.DataIn;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataOut
{
    public class explorer_locationOut
    {
        public int location { get; set; }
        public string name { get; set; }
        public string timestamp { get; set; }
        public int quest_type { get; set; }
        public int quest_id { get; set; }
        public int tab { get; set; }
        public string text { get; set; }
        public string img_id { get; set; }
        public Dictionary<int, gold> gold { get; set; }
        public List<get_item> get_item { get; set; }
        public int? start { get; set; }
        public int? end { get; set; }
    }

    public class explorer_locationOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, explorer_locationOut> explorer_location { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
