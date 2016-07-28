package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.missionlistOutManager;

public class missionlistInManager
{
    public int deceive;
    public List<missionlist> missionlist;
    public int res;
    public String sv;

    public missionlistOutManager Convert()
    {
        missionlistOutManager ret = new missionlistOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.missionlist = new HashMap<>();

        for (missionlist item : this.missionlist)
        {
            ret.missionlist.put(item.id, item);
        }

        return ret;
    }
}