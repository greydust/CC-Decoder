package DataIn;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import DataOut.explorer_locationOut;
import DataOut.explorer_locationOutManager;

public class explorerlocationInManager
{
    public int deceive;
    public List<explorer_locationIn> explorer_location;
    public int res;
    public String sv;

    public explorer_locationOutManager Convert()
    {
        explorer_locationOutManager ret = new explorer_locationOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.explorer_location = new HashMap<>();

        for (explorer_locationIn item : this.explorer_location)
        {
            explorer_locationOut location = new explorer_locationOut();
            location.location = item.location;
            location.name = item.name;
            location.timestamp = item.timestamp;
            location.quest_type = item.quest_type;
            location.quest_id = item.quest_id;
            location.tab = item.tab;
            location.text = item.text;
            location.img_id = item.img_id;
            location.start = item.start;
            location.end = item.end;
            location. gold = new HashMap<>();
            location. get_item = new ArrayList<>();
            ret.explorer_location.put(item.location, location);

            for (gold gold : item.gold)
            {
                ret.explorer_location.get(item.location).gold.put(gold.interval_id, gold);
            }

            for (get_item getItem : item.get_item)
            {
                ret.explorer_location.get(item.location).get_item.add(getItem);
            }
        }

        return ret;
    }
}