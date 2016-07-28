package DataIn;

import java.util.HashMap;

import DataOut.bosspatternOutManager;
import DataOut.bossskillOutManager;

public class bossinfoInManager
{
    public int deceive;
    public bossinfoIn bossinfo;
    public int res;
    public String sv;

    public bossskillOutManager ConvertTobossskill()
    {
        bossskillOutManager ret = new bossskillOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.bossskill = new HashMap<>();

        for (bossskill item : this.bossinfo.bossskill)
        {
            ret.bossskill.put(item.skillid, item);
        }

        return ret;
    }

    public bosspatternOutManager ConvertTobosspattern()
    {
        bosspatternOutManager ret = new bosspatternOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.bosspattern = new HashMap<>();

        for (bosspattern item : this.bossinfo.bosspattern)
        {
            ret.bosspattern.put(item.patternid, item);
        }

        return ret;
    }
}