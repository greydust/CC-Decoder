using JsonConverter.DataOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class explorer_info
    {
        public int time { get; set; }
        public int interval_id { get; set; }
    }

    public class explorerinfoInManager
    {
        public int deceive { get; set; }
        public List<explorer_info> explorer_info { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public explorer_infoOutManager Convert()
        {
            explorer_infoOutManager ret = new explorer_infoOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                explorer_info = new Dictionary<int, explorer_info>(),
            };

            foreach (explorer_info item in this.explorer_info)
            {
                ret.explorer_info.Add(item.interval_id, item);
            }

            return ret;
        }
    }
}
