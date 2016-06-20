using JsonConverter.DataIn;
using System;
using System.Collections.Generic;

namespace JsonConverter.DataOut
{
    public class episodeinfoOutManager
    {
        public int deceive { get; set; }
        public Dictionary<Tuple<int, int>, episodeinfo> episodeinfo { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
