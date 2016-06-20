using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class event_badge
    {
        public int position { get; set; }
        public int start { get; set; }
        public int end { get; set; }
        public string text { get; set; }
    }

    public class eventbadgeInManager
    {
        public int deceive { get; set; }
        public List<event_badge> event_badge { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
