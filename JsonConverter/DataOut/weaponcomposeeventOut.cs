using JsonConverter.DataIn;
using System.Collections.Generic;

namespace JsonConverter.DataOut
{
    public class weaponcomposeeventOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, weapon_compose_event> weapon_compose_event { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
