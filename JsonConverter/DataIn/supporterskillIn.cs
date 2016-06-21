using JsonConverter.DataOut;
using System.Collections.Generic;

namespace JsonConverter.DataIn
{
    public class supporterskill
    {
        public int ability_id { get; set; }
        public string name { get; set; }
        public int ability { get; set; }
        public string text { get; set; }
        public int? abi0 { get; set; }
        public int? abi1 { get; set; }
        public int? abi2 { get; set; }
        public int? param0 { get; set; }
        public int? param1 { get; set; }
        public int? param2 { get; set; }
        public int? param3 { get; set; }
        public double? param4 { get; set; }
    }

    public class supporterskillInManager
    {
        public int deceive { get; set; }
        public List<supporterskill> supporterskill { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public supporterskillOutManager Convert()
        {
            supporterskillOutManager ret = new supporterskillOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                supporterskill = new Dictionary<int, supporterskill>(),
            };

            foreach (supporterskill item in this.supporterskill)
            {
                ret.supporterskill.Add(item.ability_id, item);
            }

            return ret;
        }
    }
}
