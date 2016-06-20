using JsonConverter.DataOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class reward
    {
        public string type { get; set; }
        public string id { get; set; }
        public string val { get; set; }
    }

    public class missionlist
    {
        public int id { get; set; }
        public List<object> quest_id { get; set; }
        public string title { get; set; }
        public string sub_id { get; set; }
        public reward reward { get; set; }
        public string help { get; set; }
        public int? max_num { get; set; }
    }

    public class missionlistInManager
    {
        public int deceive { get; set; }
        public List<missionlist> missionlist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public missionlistOutManager Convert()
        {
            missionlistOutManager ret = new missionlistOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                missionlist = new Dictionary<int, missionlist>(),
            };

            foreach (missionlist item in this.missionlist)
            {
                ret.missionlist.Add(item.id, item);
            }

            return ret;
        }
    }
}
