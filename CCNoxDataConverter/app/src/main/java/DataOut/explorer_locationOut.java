package DataOut;

import java.util.HashMap;
import java.util.List;

import DataIn.gold;
import DataIn.get_item;

public class explorer_locationOut
{
    public int location;
    public String name;
    public String timestamp;
    public int quest_type;
    public int quest_id;
    public int tab;
    public String text;
    public String img_id;
    public HashMap<Integer, gold> gold;
    public List<get_item> get_item;
    public Integer start;
    public Integer end;
}