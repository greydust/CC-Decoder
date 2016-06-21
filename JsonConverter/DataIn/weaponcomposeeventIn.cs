using JsonConverter.DataOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class collabo
    {
        public bool border_quest_check { get; set; }
        public string img_name { get; set; }
        public string first_message { get; set; }
        public string hit_message { get; set; }
        public string hit_voice { get; set; }
    }

    public class weapon_compose_event
    {
        public int event_id { get; set; }
        public int start { get; set; }
        public int end { get; set; }
        public int event_type { get; set; }
        public string text { get; set; }
        public collabo collabo { get; set; }
    }

    public class weaponcomposeeventInManager
    {
        public int deceive { get; set; }
        public List<weapon_compose_event> weapon_compose_event { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public weaponcomposeeventOutManager Convert()
        {
            weaponcomposeeventOutManager ret = new weaponcomposeeventOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                weapon_compose_event = new Dictionary<int, weapon_compose_event>(),
            };

            foreach (weapon_compose_event item in this.weapon_compose_event)
            {
                ret.weapon_compose_event.Add(item.event_id, item);
            }

            return ret;
        }
    }
}
