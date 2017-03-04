using JsonConverter.DataOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class weaponlist
    {
        public int id { get; set; }
        public string name { get; set; }
        public int type_atk { get; set; }
        public int attackMax { get; set; }
        public int type_cri { get; set; }
        public int criticalMax { get; set; }
        public int type_grd { get; set; }
        public int guardMax { get; set; }
        public int type { get; set; }
        public string model { get; set; }
        public int? rank { get; set; }
        public int? skill { get; set; }
    }

    public class evolve
    {
        public int evol_dst { get; set; }
        public int id { get; set; }
        public string name { get; set; }
        public string profile { get; set; }
        public int rank_limit { get; set; }
        public int rarity { get; set; }
        public int usable0 { get; set; }
        public int usable1 { get; set; }
        public int usable2 { get; set; }
        public List<int?> usable { get; set; }
        public int? ring { get; set; }
    }

    public class reinforce
    {
        public int id { get; set; }
        public string name { get; set; }
        public string profile { get; set; }
        public int rank_limit { get; set; }
        public int rarity { get; set; }
        public double success_rate { get; set; }
        public int type { get; set; }
    }

    public class weaponlistInManager
    {
        public int deceive { get; set; }
        public List<weaponlist> weaponlist { get; set; }
        public List<evolve> evolve { get; set; }
        public List<reinforce> reinforce { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public weaponlistOutManager ConvertToweaponlist()
        {
            weaponlistOutManager ret = new weaponlistOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                weaponlist = new Dictionary<int, weaponlist>(),
            };

            foreach (weaponlist item in this.weaponlist)
            {
                ret.weaponlist[item.id] = item;
            }

            return ret;
        }

        public evolveOutManager ConvertToevolve()
        {
            evolveOutManager ret = new evolveOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                evolve = new Dictionary<int, evolve>(),
            };

            foreach (evolve item in this.evolve)
            {
                ret.evolve.Add(item.id, item);
            }

            return ret;
        }

        public reinforceOutManager ConvertToreinforce()
        {
            reinforceOutManager ret = new reinforceOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                reinforce = new Dictionary<int, reinforce>(),
            };

            foreach (reinforce item in this.reinforce)
            {
                ret.reinforce.Add(item.id, item);
            }

            return ret;
        }
    }
}
