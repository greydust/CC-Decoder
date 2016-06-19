using JsonConverter.DataOut;
using System.Collections.Generic;

namespace JsonConverter.DataIn
{
    public class battle_bgInManager
    {
        public string deceive { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
        public List<battle_bgIn> battle_bg { get; set; }

        public battle_bgOutManager Convert()
        {
            battle_bgOutManager ret = new battle_bgOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                battle_bg = new Dictionary<string, battle_bgOut>(),
            };

            foreach (battle_bgIn bg in this.battle_bg)
            {
                ret.battle_bg.Add(bg.id, new battle_bgOut() {
                    id = bg.id,
                    flag = bg.flag,
                    bg_name = bg.bg_name,
                    effect_s = bg.effect_s,
                    effect_l = bg.effect_l,
                    change_flag = bg.change_flag,
                });
            }

            return ret;
        }
    }

    public class battle_bgIn
    {
        public string id { get; set; }
        public int flag { get; set; }
        public string bg_name { get; set; }
        public string effect_s { get; set; }
        public string effect_l { get; set; }
        public int change_flag { get; set; }
    }
}