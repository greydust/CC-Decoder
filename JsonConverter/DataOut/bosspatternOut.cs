using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataOut
{
    public class bosspatternOut
    {
        public int che { get; set; }
        public int chs { get; set; }
        public int flag { get; set; }
        public double hpend { get; set; }
        public double hpstart { get; set; }
        public int patternid { get; set; }
        public double pose { get; set; }
        public double posp { get; set; }
        public int priority { get; set; }
        public int scost { get; set; }
        public string sinfo { get; set; }
        public int skillid0 { get; set; }
        public int skillid1 { get; set; }
        public int skillid2 { get; set; }
        public int skillid3 { get; set; }
        public string sname { get; set; }
        public string stext { get; set; }
        public int voice { get; set; }
        public int? skillid4 { get; set; }
        public int? limit { get; set; }
        public int? skillid5 { get; set; }
        public int? skillid6 { get; set; }
        public int? bgf { get; set; }
        public int? mne { get; set; }
        public int? mns { get; set; }
    }

    public class bosspatternOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, bosspatternOut> bosspattern { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
