using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class variousquest_eventparam
    {
        public double ap { get; set; }
        public double exp { get; set; }
        public int chara_exp { get; set; }
        public int gold { get; set; }
        public string ap_text { get; set; }
    }

    public class quest_list
    {
        public int type { get; set; }
        public int quest_id { get; set; }
    }

    public class quest_event
    {
        public int start { get; set; }
        public int end { get; set; }
        public variousquest_eventparam param { get; set; }
        public List<quest_list> quest_list { get; set; }
    }

    public class variousIn
    {
        public int deceive { get; set; }
        public List<quest_event> quest_event { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
