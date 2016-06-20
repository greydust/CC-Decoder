using JsonConverter.DataIn;
using System.Collections.Generic;

namespace JsonConverter.DataOut
{
    public class explorer_infoOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, explorer_info> explorer_info { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
