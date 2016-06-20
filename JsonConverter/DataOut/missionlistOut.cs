using JsonConverter.DataIn;
using System.Collections.Generic;

namespace JsonConverter.DataOut
{
    public class missionlistOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, missionlist> missionlist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
