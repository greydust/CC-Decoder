using JsonConverter.DataOut;
using System.Collections.Generic;

namespace JsonConverter.DataIn
{
    public class bossskillIn
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

    public class bosspatternIn
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
        public List<bossskillIn> bossskill { get; set; }
        public List<bosspatternIn> bosspattern { get; set; }
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
                bossskill = new Dictionary<int, bossskillOut>(),
            };

            foreach (bossskillIn skill in this.bossinfo.bossskill)
            {
                ret.bossskill.Add(skill.skillid, new bossskillOut()
                {
                    atkspeed = skill.atkspeed,
                    charge = skill.charge,
                    chargemotion = skill.chargemotion,
                    iparam0 = skill.iparam0,
                    skillflag = skill.skillflag,
                    skillflag0_0 = skill.skillflag0_0,
                    skillflag0_1 = skill.skillflag0_1,
                    skillflag1_0 = skill.skillflag1_0,
                    skillflag1_1 = skill.skillflag1_1,
                    skillid = skill.skillid,
                    skillid0 = skill.skillid0,
                    skillparam0 = skill.skillparam0,
                    skillparam1 = skill.skillparam1,
                    skillparam2 = skill.skillparam2,
                    skillparam3 = skill.skillparam3,
                    skillparam4 = skill.skillparam4,
                    skillparam5 = skill.skillparam5,
                    skillparam6 = skill.skillparam6,
                    skillparam7 = skill.skillparam7,
                    skillparam8 = skill.skillparam8,
                    skillparam9 = skill.skillparam9,
                    spmotname = skill.spmotname,
                    str0 = skill.str0,
                    str1 = skill.str1,
                    str2 = skill.str2,
                });
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
                bosspattern = new Dictionary<int, bosspatternOut>(),
            };

            foreach (bosspatternIn pattern in this.bossinfo.bosspattern)
            {
                ret.bosspattern.Add(pattern.patternid, new bosspatternOut()
                {
                    bgf = pattern.bgf,
                    che = pattern.che,
                    chs = pattern.chs,
                    flag = pattern.flag,
                    hpend = pattern.hpend,
                    hpstart = pattern.hpstart,
                    limit = pattern.limit,
                    mne = pattern.mne,
                    mns = pattern.mns,
                    patternid = pattern.patternid,
                    pose = pattern.pose,
                    posp = pattern.posp,
                    priority = pattern.priority,
                    scost = pattern.scost,
                    sinfo = pattern.sinfo,
                    skillid0 = pattern.skillid0,
                    skillid1 = pattern.skillid1,
                    skillid2 = pattern.skillid2,
                    skillid3 = pattern.skillid3,
                    skillid4 = pattern.skillid4,
                    skillid5 = pattern.skillid5,
                    skillid6 = pattern.skillid6,
                    sname = pattern.sname,
                    stext = pattern.stext,
                    voice = pattern.voice,
                });
            }

            return ret;
        }
    }
}
