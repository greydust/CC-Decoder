using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class create_weap
    {
        public List<object> recipe { get; set; }
        public List<object> material { get; set; }
        public List<object> category { get; set; }
        public List<object> bonus_param { get; set; }
    }

    public class create_weapInManager
    {
        public int deceive { get; set; }
        public create_weap create_weap { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
