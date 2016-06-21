using JsonConverter.DataOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class skilllist
    {
        public int ability { get; set; }
        public int flag0_0 { get; set; }
        public int flag0_1 { get; set; }
        public int flag1_0 { get; set; }
        public int flag1_1 { get; set; }
        public string name { get; set; }
        public int skillid { get; set; }
        public string timestamp { get; set; }
        public List<object> sub { get; set; }
        public double? param0 { get; set; }
        public double? param1 { get; set; }
        public double? param2 { get; set; }
        public double? param3 { get; set; }
        public string text { get; set; }
        public double? param4 { get; set; }
        public int? flag { get; set; }
        public double? param6 { get; set; }
        public double? param5 { get; set; }
        public int? iParam0 { get; set; }
        public double? param7 { get; set; }
        public double? param9 { get; set; }
        public double? param8 { get; set; }
    }

    public class skilllistInManager
    {
        public int deceive { get; set; }
        public List<skilllist> skilllist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public skilllistOutManager Convert()
        {
            skilllistOutManager ret = new skilllistOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                skilllist = new Dictionary<int, skilllist>(),
            };

            foreach (skilllist item in this.skilllist)
            {
                ret.skilllist.Add(item.skillid, item);
            }

            return ret;
        }
    }
}
