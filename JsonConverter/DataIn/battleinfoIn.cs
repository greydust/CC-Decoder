using JsonConverter.DataOut;
using System.Collections.Generic;

namespace JsonConverter.DataIn
{
    public class battle_bg
    {
        public string id { get; set; }
        public int flag { get; set; }
        public string bg_name { get; set; }
        public string effect_s { get; set; }
        public string effect_l { get; set; }
        public int change_flag { get; set; }
    }

    public class battleinfoInManager
    {
        public string deceive { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
        public List<battle_bg> battle_bg { get; set; }

        public battle_bgOutManager Convert()
        {
            battle_bgOutManager ret = new battle_bgOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                battle_bg = new Dictionary<string, battle_bg>(),
            };

            foreach (battle_bg item in this.battle_bg)
            {
                ret.battle_bg.Add(item.id, item);
            }

            return ret;
        }
    }
}