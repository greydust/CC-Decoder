package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.booklistOutManager;
import DataOut.booklistOutType;

public class booklistInManager
{
    public int deceive;
    public List<booklistInType> booklist;
    public int res;
    public String sv;

    public booklistOutManager Convert()
    {
        booklistOutManager ret = new booklistOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.booklist = new HashMap<>();

        for (booklistInType blType : this.booklist)
        {

            booklistOutType bookType = new booklistOutType();
            bookType.type = blType.type;
            bookType.list = new HashMap<>();
            ret.booklist.put(blType.type, bookType);

            for (booklist item : blType.list)
            {
                ret.booklist.get(blType.type).list.put(item.id, item);
            }
        }

        return ret;
    }
}