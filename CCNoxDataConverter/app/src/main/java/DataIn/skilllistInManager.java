package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.skilllistOutManager;

public class skilllistInManager
{
    public int deceive;
    public List<skilllist> skilllist;
    public int res;
    public String sv;

    public skilllistOutManager Convert()
    {
        skilllistOutManager ret = new skilllistOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.skilllist = new HashMap<>();

        for (skilllist item : this.skilllist)
        {
            ret.skilllist.put(item.skillid, item);
        }

        return ret;
    }
}