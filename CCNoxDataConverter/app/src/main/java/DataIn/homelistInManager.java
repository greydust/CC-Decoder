package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.homelistOutManager;

public class homelistInManager
{
    public int deceive;
    public List<homelist> homelist;
    public int res;
    public String sv;

    public homelistOutManager Convert()
    {
        homelistOutManager ret = new homelistOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.homelist = new HashMap<>();

        for (homelist item : this.homelist)
        {
            ret.homelist.put(item.home_id, item);
        }

        return ret;
    }
}