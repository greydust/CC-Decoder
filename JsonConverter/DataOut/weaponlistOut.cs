using JsonConverter.DataIn;
using System.Collections.Generic;

namespace JsonConverter.DataOut
{
    public class weaponlistOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, weaponlist> weaponlist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
