using JsonConverter.DataIn;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataOut
{
    public class itemlistOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, itemlist> itemlist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
