package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.itemlistOutManager;

public class itemlistInManager
{
    public int deceive;
    public List<itemlist> itemlist;
    public int res;
    public String sv;

    public itemlistOutManager Convert()
    {
        itemlistOutManager ret = new itemlistOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.itemlist = new HashMap<>();

        for (itemlist item : this.itemlist)
        {
            ret.itemlist.put(item.item_id, item);
        }

        return ret;
    }
}