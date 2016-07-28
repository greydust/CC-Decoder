package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.motionlistOutManager;

public class motionlistInManager
{
    public int deceive;
    public List<motionlist> motionlist;
    public int res;
    public String sv;

    public motionlistOutManager Convert()
    {
        motionlistOutManager ret = new motionlistOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.motionlist = new HashMap<>();

        for(motionlist item : this.motionlist)
        {
            ret.motionlist.put(item._motionID, item);
        }

        return ret;
    }
}