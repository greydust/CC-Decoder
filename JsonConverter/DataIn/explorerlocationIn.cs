using JsonConverter.DataOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class gold
    {
        public int interval_id { get; set; }
        public int val { get; set; }
    }

    public class get_item
    {
        public string type { get; set; }
        public int id { get; set; }
        public int val { get; set; }
        public int category_id { get; set; }
        public int priority { get; set; }
        public int? limit { get; set; }
    }

    public class explorer_locationIn
    {
        public int location { get; set; }
        public string name { get; set; }
        public string timestamp { get; set; }
        public int quest_type { get; set; }
        public int quest_id { get; set; }
        public int tab { get; set; }
        public string text { get; set; }
        public string img_id { get; set; }
        public List<gold> gold { get; set; }
        public List<get_item> get_item { get; set; }
        public int? start { get; set; }
        public int? end { get; set; }
    }

    public class explorerlocationInManager
    {
        public int deceive { get; set; }
        public List<explorer_locationIn> explorer_location { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public explorer_locationOutManager Convert()
        {
            explorer_locationOutManager ret = new explorer_locationOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                explorer_location = new Dictionary<int, explorer_locationOut>(),
            };

            foreach (explorer_locationIn item in this.explorer_location)
            {
                ret.explorer_location.Add(item.location, new explorer_locationOut()
                {
                    location = item.location,
                    name = item.name,
                    timestamp = item.timestamp,
                    quest_type = item.quest_type,
                    quest_id = item.quest_id,
                    tab = item.tab,
                    text = item.text,
                    img_id = item.img_id,
                    start = item.start,
                    end = item.end,
                    gold = new Dictionary<int, gold>(),
                    get_item = new List<get_item>(),
                });

                foreach (gold gold in item.gold)
                {
                    ret.explorer_location[item.location].gold.Add(gold.interval_id, gold);
                }

                foreach (get_item getItem in item.get_item)
                {
                    ret.explorer_location[item.location].get_item.Add(getItem);
                }
            }

            return ret;
        }
    }
}
