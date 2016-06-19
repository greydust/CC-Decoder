using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataOut
{
    public class casino_raceOut
    {
        public int tournament_id { get; set; }
        public int tournament_type { get; set; }
        public string tournament_name { get; set; }
        public int start { get; set; }
        public int end { get; set; }
        public int bet_min { get; set; }
        public int bet_max { get; set; }
        public int presentation_threshold1 { get; set; }
        public int presentation_threshold2 { get; set; }
    }

    public class casino_raceOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, casino_raceOut> casino_race { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
