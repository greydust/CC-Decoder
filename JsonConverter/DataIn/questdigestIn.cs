using JsonConverter.DataOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class append_skill
    {
        public int? cid { get; set; }
        public string idx { get; set; }
    }

    public class Chara
    {
        public int cid { get; set; }
        public int lv { get; set; }
    }

    public class Quest
    {
        public int type { get; set; }
        public int qid { get; set; }
    }

    public class Flag
    {
        public List<Chara> chara { get; set; }
        public List<Quest> quest { get; set; }
    }

    public class Gold
    {
        public string type { get; set; }
        public int? id { get; set; }
        public int val { get; set; }
        public object limited { get; set; }
        public string win_rate { get; set; }
        public bool? hit { get; set; }
        public object mass { get; set; }
    }

    public class Silver
    {
        public string type { get; set; }
        public int id { get; set; }
        public int val { get; set; }
        public object limited { get; set; }
        public string win_rate { get; set; }
        public bool? hit { get; set; }
        public object mass { get; set; }
    }

    public class Copper
    {
        public string type { get; set; }
        public int id { get; set; }
        public int val { get; set; }
        public object limited { get; set; }
        public string win_rate { get; set; }
        public bool? hit { get; set; }
        public object mass { get; set; }
    }

    public class casino_reward
    {
        public List<Gold> gold { get; set; }
        public int gold_time { get; set; }
        public List<Silver> silver { get; set; }
        public int silver_time { get; set; }
        public List<Copper> copper { get; set; }
    }

    public class reward_data
    {
        public string type { get; set; }
        public int box { get; set; }
    }

    public class fixed_help
    {
        public int cid { get; set; }
        public int lv { get; set; }
        public int hp { get; set; }
        public int atk { get; set; }
        public string helper_comment { get; set; }
        public List<bool> skillflag { get; set; }
    }

    public class quest_eventparam
    {
        public List<int> enable_jobs { get; set; }
        public object border { get; set; }
        public string compare { get; set; }
        public string rarity { get; set; }
        public List<int?> home { get; set; }
    }

    public class entry_limited
    {
        public string category { get; set; }
        public quest_eventparam param { get; set; }
    }

    public class questdigest
    {
        public append_skill append_skill { get; set; }
        public int area_id { get; set; }
        public List<int> chapter_list { get; set; }
        public int difficulty { get; set; }
        public Flag flag { get; set; }
        public string name { get; set; }
        public int quest_id { get; set; }
        public List<int?> bg_list { get; set; }
        public int chapter_cnt { get; set; }
        public casino_reward casino_reward { get; set; }
        public bool? is_casino { get; set; }
        public int? place_id { get; set; }
        public int? stamina { get; set; }
        public int? reward_box { get; set; }
        public reward_data reward_data { get; set; }
        public int? sort { get; set; }
        public List<int?> field_type { get; set; }
        public string icon { get; set; }
        public List<object> relation { get; set; }
        public List<int?> relation_id { get; set; }
        public int? kind_prm { get; set; }
        public List<object> eneset_treasure { get; set; }
        public int? from { get; set; }
        public int? kind { get; set; }
        public int? to { get; set; }
        public List<object> route_treasure { get; set; }
        public List<fixed_help> fixed_help { get; set; }
        public int? casino_coin { get; set; }
        public entry_limited entry_limited { get; set; }
        public int? casino_reward_up_rate { get; set; }
        public bool? disable_continue { get; set; }
        public bool? is_infinite { get; set; }
        public int? wave_cnt { get; set; }
    }

    public class questdigestInManager
    {
        public int deceive { get; set; }
        public List<List<questdigest>> questdigest { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public questdigestOutManager Convert()
        {
            questdigestOutManager ret = new questdigestOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                questdigest = new Dictionary<int, questdigest>(),
            };

            foreach (List<questdigest> itemList in this.questdigest)
            {
                foreach (questdigest item in itemList)
                {
                    if (!ret.questdigest.ContainsKey(item.quest_id))
                    {
                        ret.questdigest.Add(item.quest_id, item);
                    }
                    else
                    {
                        // should be error here, but TW version messes it up.
                    }
                }
            }

            return ret;
        }
    }
}
