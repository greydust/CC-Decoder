using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class weapon_compose
    {
        public List<int> gold { get; set; }
    }

    public class weaponcomposeInManager
    {
        public int deceive { get; set; }
        public weapon_compose weapon_compose { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
