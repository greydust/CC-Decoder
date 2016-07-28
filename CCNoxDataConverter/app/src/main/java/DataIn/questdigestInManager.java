package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.questdigestOutManager;

public class questdigestInManager
{
    public int deceive;
    public List<List<questdigest>> questdigest;
    public int res;
    public String sv;

    public questdigestOutManager Convert()
    {
        questdigestOutManager ret = new questdigestOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.questdigest = new HashMap<>();

        for (List<questdigest> itemList : this.questdigest)
        {
            for (questdigest item : itemList)
            {
                ret.questdigest.put(item.quest_id, item);
            }
        }

        return ret;
    }
}