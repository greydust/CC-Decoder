using System.Collections.Generic;

namespace JsonConverter.DataOut
{
    public class battle_bgOutManager
    {
        public string deceive { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
        public Dictionary<string, battle_bgOut> battle_bg { get; set; }
    }

    public class battle_bgOut
    {
        public string id { get; set; }
        public int flag { get; set; }
        public string bg_name { get; set; }
        public string effect_s { get; set; }
        public string effect_l { get; set; }
        public int change_flag { get; set; }
    }
}
