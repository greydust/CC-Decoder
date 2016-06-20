using JsonConverter.DataOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class itemlist
    {
        public int item_id { get; set; }
        public string name { get; set; }
        public string unit { get; set; }
    }

    public class itemlistInManager
    {
        public int deceive { get; set; }
        public List<itemlist> itemlist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public itemlistOutManager Convert()
        {
            itemlistOutManager ret = new itemlistOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                itemlist = new Dictionary<int, itemlist>(),
            };

            foreach (itemlist item in this.itemlist)
            {
                ret.itemlist.Add(item.item_id, item);
            }

            return ret;
        }
    }
}
