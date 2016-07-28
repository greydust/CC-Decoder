package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.battle_bgOutManager;

public class battleinfoInManager
{
    public int deceive;
    public int res;
    public String sv;
    public List<battle_bg> battle_bg;

    public battle_bgOutManager Convert()
    {
        battle_bgOutManager ret = new battle_bgOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.battle_bg = new HashMap<>();

        for(battle_bg item : this.battle_bg)
        {
            ret.battle_bg.put(item.id, item);
        }

        return ret;
    }
}
