package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.supporterskillOutManager;

public class supporterskillInManager
{
    public int deceive;
    public List<supporterskill> supporterskill;
    public int res;
    public String sv;

    public supporterskillOutManager Convert()
    {
        supporterskillOutManager ret = new supporterskillOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.supporterskill = new HashMap<>();

        for (supporterskill item : this.supporterskill)
        {
            ret.supporterskill.put(item.ability_id, item);
        }

        return ret;
    }
}