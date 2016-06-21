using JsonConverter.DataIn;
using System.Collections.Generic;

namespace JsonConverter.DataOut
{
    public class battle_bgOutManager
    {
        public int deceive { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
        public Dictionary<string, battle_bg> battle_bg { get; set; }
    }
}
