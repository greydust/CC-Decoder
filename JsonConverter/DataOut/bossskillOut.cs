using JsonConverter.DataIn;
using System.Collections.Generic;

namespace JsonConverter.DataOut
{
    public class bossskillOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, bossskill> bossskill { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
