package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.evolveOutManager;
import DataOut.reinforceOutManager;
import DataOut.weaponlistOutManager;

public class weaponlistInManager
{
    public int deceive;
    public List<weaponlist> weaponlist;
    public List<evolve> evolve;
    public List<reinforce> reinforce;
    public int res;
    public String sv;

    public weaponlistOutManager ConvertToweaponlist()
    {
        weaponlistOutManager ret = new weaponlistOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.weaponlist = new HashMap<>();

        for (weaponlist item : this.weaponlist)
        {
            ret.weaponlist.put(item.id, item);
        }

        return ret;
    }

    public evolveOutManager ConvertToevolve()
    {
        evolveOutManager ret = new evolveOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.evolve = new HashMap<>();

        for(evolve item : this.evolve)
        {
            ret.evolve.put(item.id, item);
        }

        return ret;
    }

    public reinforceOutManager ConvertToreinforce()
    {
        reinforceOutManager ret = new reinforceOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.reinforce = new HashMap<>();

        for (reinforce item : this.reinforce)
        {
            ret.reinforce.put(item.id, item);
        }

        return ret;
    }
}