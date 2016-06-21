using JsonConverter.DataOut;
using System.Collections.Generic;

namespace JsonConverter.DataIn
{
    public class repeatmissionlistreward
    {
        public string type { get; set; }
        public string id { get; set; }
        public string val { get; set; }
    }

    public class repeatmissionlist
    {
        public int id { get; set; }
        public int type { get; set; }
        public string title { get; set; }
        public string sub_id { get; set; }
        public int max_num { get; set; }
        public repeatmissionlistreward reward { get; set; }
        public string help { get; set; }
    }

    public class repeatmissionlistInManager
    {
        public int deceive { get; set; }
        public List<repeatmissionlist> repeatmissionlist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
