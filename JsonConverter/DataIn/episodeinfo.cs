using JsonConverter.DataOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class episode
    {
        public string name { get; set; }
        public List<int> quest { get; set; }
        public int develop_only { get; set; }
    }

    public class episodeinfo
    {
        public int type { get; set; }
        public int id { get; set; }
        public List<episode> episode { get; set; }
        public bool collabo { get; set; }
    }

    public class episodeinfoInManager
    {
        public int deceive { get; set; }
        public List<episodeinfo> episodeinfo { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public episodeinfoOutManager Convert()
        {
            episodeinfoOutManager ret = new episodeinfoOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                episodeinfo = new Dictionary<Tuple<int, int>, episodeinfo>(),
            };

            foreach (episodeinfo item in this.episodeinfo)
            {
                ret.episodeinfo[Tuple.Create<int, int>(item.id, item.type)] = item;
            }

            return ret;
        }
    }
}
