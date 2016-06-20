using JsonConverter.DataOut;
using System.Collections.Generic;

namespace JsonConverter.DataIn
{
    public class bossskill
    {
        public string atkspeed { get; set; }
        public int skillflag0_0 { get; set; }
        public int skillflag0_1 { get; set; }
        public int skillflag1_0 { get; set; }
        public int skillflag1_1 { get; set; }
        public int skillid { get; set; }
        public int skillid0 { get; set; }
        public double skillparam1 { get; set; }
        public string spmotname { get; set; }
        public double? skillparam3 { get; set; }
        public double? skillparam2 { get; set; }
        public double? skillparam4 { get; set; }
        public int? skillflag { get; set; }
        public int? iparam0 { get; set; }
        public double? skillparam5 { get; set; }
        public double? skillparam6 { get; set; }
        public double? charge { get; set; }
        public string chargemotion { get; set; }
        public double? skillparam0 { get; set; }
        public string str0 { get; set; }
        public string str1 { get; set; }
        public double? skillparam7 { get; set; }
        public string str2 { get; set; }
        public double? skillparam8 { get; set; }
        public double? skillparam9 { get; set; }
    }

    public class bosspattern
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

    public class bossinfoIn
    {
        public List<bossskill> bossskill { get; set; }
        public List<bosspattern> bosspattern { get; set; }
    }

    public class bossinfoInManager
    {
        public int deceive { get; set; }
        public bossinfoIn bossinfo { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public bossskillOutManager ConvertTobossskill()
        {
            bossskillOutManager ret = new bossskillOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                bossskill = new Dictionary<int, bossskill>(),
            };

            foreach (bossskill item in this.bossinfo.bossskill)
            {
                ret.bossskill.Add(item.skillid, item);
            }
            
            return ret;
        }

        public bosspatternOutManager ConvertTobosspattern()
        {
            bosspatternOutManager ret = new bosspatternOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                bosspattern = new Dictionary<int, bosspattern>(),
            };

            foreach (bosspattern item in this.bossinfo.bosspattern)
            {
                ret.bosspattern.Add(item.patternid, item);
            }

            return ret;
        }
    }
}
