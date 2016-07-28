package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.weapon_compose_eventOutManager;

public class weaponcomposeeventInManager
{
    public int deceive;
    public List<weapon_compose_event> weapon_compose_event;
    public int res;
    public String sv;

    public weapon_compose_eventOutManager Convert()
    {
        weapon_compose_eventOutManager ret = new weapon_compose_eventOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.weapon_compose_event = new HashMap<>();

        for (weapon_compose_event item : this.weapon_compose_event)
        {
            ret.weapon_compose_event.put(item.event_id, item);
        }

        return ret;
    }
}