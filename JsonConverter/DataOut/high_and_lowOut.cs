using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataOut
{
    public class high_and_lowOut
    {
        public int deck_id { get; set; }
        public string text { get; set; }
        public List<int> rate { get; set; }
        public List<int> cards { get; set; }
        public int start_time { get; set; }
        public int end_time { get; set; }
        public int entry_fee { get; set; }
    }

    public class high_and_lowOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, high_and_lowOut> high_and_low { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
