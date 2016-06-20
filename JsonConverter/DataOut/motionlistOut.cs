using JsonConverter.DataIn;
using System.Collections.Generic;

namespace JsonConverter.DataOut
{
    public class motionlistOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, motionlist> motionlist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
