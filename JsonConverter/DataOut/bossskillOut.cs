using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataOut
{
    public class bossskillOut
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

    public class bossskillOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, bossskillOut> bossskill { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
