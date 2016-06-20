using JsonConverter.DataOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class charainfo
    {
        public int cid { get; set; }
        public string name { get; set; }
        public string title { get; set; }
        public int growth { get; set; }
        public int rarity { get; set; }
        public int cost { get; set; }
        public int jobtype { get; set; }
        public int battletype { get; set; }
        public int limit_break { get; set; }
        public int maxlv { get; set; }
        public int inihp { get; set; }
        public int iniap { get; set; }
        public int Aparam { get; set; }
        public string skillname { get; set; }
        public string skilltext { get; set; }
        public double skillparam1 { get; set; }
        public double skillparam3 { get; set; }
        public int skillflag { get; set; }
        public double atkspeed { get; set; }
        public double movspeed { get; set; }
        public double shotspeed { get; set; }
        public int attackflag { get; set; }
        public int motionid { get; set; }
        public string spmotname { get; set; }
        public int weaponid { get; set; }
        public string illustrator { get; set; }
        public string voice_artist { get; set; }
        public string sptext { get; set; }
        public int home { get; set; }
        public int sup_cost { get; set; }
        public int first_quest { get; set; }
        public int place { get; set; }
        public string profile { get; set; }
        public int exp_type { get; set; }
        public int skillflag0_0 { get; set; }
        public int skillflag0_1 { get; set; }
        public int skillflag1_0 { get; set; }
        public int skillflag1_1 { get; set; }
        public int bgm { get; set; }
        public int chara_type { get; set; }
        public List<int> skillid { get; set; }
        public int skill_cost { get; set; }
        public double? critical { get; set; }
        public int? sup1 { get; set; }
        public int? sup2 { get; set; }
        public int? ring { get; set; }
        public int? disp_quest { get; set; }
        public int? weaponid2 { get; set; }
        public double? skillparam2 { get; set; }
        public int? effectid { get; set; }
        public int? atknumber { get; set; }
        public double? revision { get; set; }
        public double? CRIrevision { get; set; }
        public int? CRInumber { get; set; }
        public int? master_flag { get; set; }
        public int? pattern0 { get; set; }
        public double? hp_offset { get; set; }
        public int? pattern1 { get; set; }
        public double? skillparam0 { get; set; }
        public double? skillparam4 { get; set; }
        public string str0 { get; set; }
        public string str1 { get; set; }
        public string modelname { get; set; }
        public double? skillparam5 { get; set; }
        public double? modelscale { get; set; }
        public int? iparam0 { get; set; }
        public int? charge { get; set; }
        public string chargemotion { get; set; }
        public double? skillparam6 { get; set; }
        public double? skillparam7 { get; set; }
        public double? skillparam8 { get; set; }
        public double? skillparam9 { get; set; }
        public int? pattern2 { get; set; }
        public int? pattern3 { get; set; }
        public int? pattern4 { get; set; }
        public int? pattern5 { get; set; }
        public int? meet_chara { get; set; }
        public double? defmagic { get; set; }
        public string str2 { get; set; }
        public int? gender { get; set; }
        public int? movetype { get; set; }
        public int? is_enemy { get; set; }
        public double? autoskill { get; set; }
        public int? hpflag { get; set; }
        public int? weakflag { get; set; }
        public int? defbonus { get; set; }
        public double? firstautoskill { get; set; }
        public double? defphysics { get; set; }
        public double? atkrange { get; set; }
        public double? bodyrange { get; set; }
        public int? pattern6 { get; set; }
        public int? pattern7 { get; set; }
        public int? pattern8 { get; set; }
        public int? d_autoskill { get; set; }
        public int? fd_autoskill { get; set; }
        public int? iparam1 { get; set; }
    }

    public class chararein
    {
        public int exp { get; set; }
        public int id { get; set; }
        public int jobtype { get; set; }
        public string name { get; set; }
        public string profile { get; set; }
        public int rarity { get; set; }
    }

    public class charalb
    {
        public int id { get; set; }
        public int jobtype { get; set; }
        public string name { get; set; }
        public string profile { get; set; }
        public int rarity { get; set; }
        public int ring { get; set; }
        public int cid1 { get; set; }
        public int cid2 { get; set; }
        public int cid3 { get; set; }
        public int cid4 { get; set; }
        public int cid5 { get; set; }
        public int cid6 { get; set; }
        public int cid7 { get; set; }
        public int cid8 { get; set; }
        public int cid9 { get; set; }
        public int cid10 { get; set; }
        public int? start_time { get; set; }
        public int? end_time { get; set; }
        public List<int?> rare_gacha_cids { get; set; }
    }

    public class samechara
    {
        public int cid { get; set; }
        public int src_cid { get; set; }
    }

    public class charainfoInManager
    {
        public int deceive { get; set; }
        public List<charainfo> charainfo { get; set; }
        public List<chararein> chararein { get; set; }
        public List<charalb> charalb { get; set; }
        public List<samechara> samechara { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public charainfoOutManager ConvertTocharainfo()
        {
            charainfoOutManager ret = new charainfoOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                charainfo = new Dictionary<int, charainfo>(),
            };

            foreach (charainfo item in this.charainfo)
            {
                ret.charainfo.Add(item.cid, item);
            }

            return ret;
        }

        public charalbOutManager ConvertTocharalb()
        {
            charalbOutManager ret = new charalbOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                charalb = new Dictionary<int, charalb>(),
            };

            foreach (charalb item in this.charalb)
            {
                ret.charalb.Add(item.id, item);
            }

            return ret;
        }

        public charareinOutManager ConvertTochararein()
        {
            charareinOutManager ret = new charareinOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                chararein = new Dictionary<int, chararein>(),
            };

            foreach (chararein item in this.chararein)
            {
                ret.chararein.Add(item.id, item);
            }

            return ret;
        }

        public samecharaOutManager ConvertTosamechara()
        {
            samecharaOutManager ret = new samecharaOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                samechara = new Dictionary<int, samechara>(),
            };

            foreach (samechara item in this.samechara)
            {
                ret.samechara.Add(item.cid, item);
            }

            return ret;
        }
    }
}
