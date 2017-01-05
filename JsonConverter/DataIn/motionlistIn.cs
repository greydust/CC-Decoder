using JsonConverter.DataOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class motionlist
    {
        public string _appear { get; set; }
        public string _atk { get; set; }
        public string _atk2 { get; set; }
        public string _boneType { get; set; }
        public string _charaType { get; set; }
        public string _collision { get; set; }
        public string _death { get; set; }
        public string _dmg_l { get; set; }
        public string _dmg_s { get; set; }
        public string _guard { get; set; }
        public int _motionID { get; set; }
        public string _shot { get; set; }
        public string _shot2 { get; set; }
        public string _stun { get; set; }
        public string _wait { get; set; }
        public string _waitWarn { get; set; }
        public string _walk { get; set; }
        public string _walkWarn { get; set; }
        public string _win { get; set; }
    }

    public class motionlistInManager
    {
        public int deceive { get; set; }
        public List<motionlist> motionlist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public motionlistOutManager Convert()
        {
            motionlistOutManager ret = new motionlistOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                motionlist = new Dictionary<int, motionlist>(),
            };

            foreach (motionlist item in this.motionlist)
            {
                if (!ret.motionlist.ContainsKey(item._motionID))
                {
                    ret.motionlist.Add(item._motionID, item);
                } else
                {
                    // should be error here, but TW version messes it up.
                }
            }

            return ret;
        }
    }
}
