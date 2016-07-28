package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.explorer_infoOutManager;

public class explorerinfoInManager
{
    public int deceive;
    public List<explorer_info> explorer_info;
    public int res;
    public String sv;

    public explorer_infoOutManager Convert()
    {
        explorer_infoOutManager ret = new explorer_infoOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.explorer_info = new HashMap<>();

        for (explorer_info item : this.explorer_info)
        {
            ret.explorer_info.put(item.interval_id, item);
        }

        return ret;
    }
}