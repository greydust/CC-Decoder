using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class area
    {
        public int areaId { get; set; }
        public string chara { get; set; }
        public string icon { get; set; }
        public string name { get; set; }
        public int open { get; set; }
        public int rank { get; set; }
        public int sx { get; set; }
        public int sy { get; set; }
        public string tex { get; set; }
        public string timestamp { get; set; }
        public string worldId { get; set; }
        public string xpos { get; set; }
        public string ypos { get; set; }
    }

    public class place
    {
        public int areaId { get; set; }
        public int battleBg { get; set; }
        public int bg { get; set; }
        public int gacha { get; set; }
        public int icon { get; set; }
        public string name { get; set; }
        public int placeId { get; set; }
        public double x { get; set; }
        public double y { get; set; }
    }

    public class route
    {
        public string areaId { get; set; }
        public string battleBg { get; set; }
        public string from { get; set; }
        public string timestamp { get; set; }
        public string to { get; set; }
    }

    public class place_bg
    {
        public int id { get; set; }
        public int ofs_x { get; set; }
        public int ofs_y { get; set; }
        public string timestamp { get; set; }
        public int x { get; set; }
        public int y { get; set; }
    }

    public class world
    {
        public string id { get; set; }
        public string name { get; set; }
        public string text { get; set; }
        public string timestamp { get; set; }
    }

    public class chara_place
    {
        public string id { get; set; }
        public string name { get; set; }
        public string timestamp { get; set; }
    }

    public class worldinfoInManager
    {
        public int deceive { get; set; }
        public List<area> area { get; set; }
        public List<place> place { get; set; }
        public List<route> route { get; set; }
        public List<place_bg> place_bg { get; set; }
        public List<world> world { get; set; }
        public List<chara_place> chara_place { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
