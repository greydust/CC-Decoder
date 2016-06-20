using JsonConverter.DataOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class homelist
    {
        public int home_id { get; set; }
        public string name { get; set; }
    }

    public class homelistInManager
    {
        public int deceive { get; set; }
        public List<homelist> homelist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public homelistOutManager Convert()
        {
            homelistOutManager ret = new homelistOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                homelist = new Dictionary<int, homelist>(),
            };

            foreach (homelist item in this.homelist)
            {
                ret.homelist.Add(item.home_id, item);
            }

            return ret;
        }
    }
}
