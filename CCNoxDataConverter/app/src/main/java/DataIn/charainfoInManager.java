package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.charainfoOutManager;
import DataOut.charalbOutManager;
import DataOut.charareinOutManager;
import DataOut.samecharaOutManager;

public class charainfoInManager
{
    public int deceive;
    public List<charainfo> charainfo;
    public List<chararein> chararein;
    public List<charalb> charalb;
    public List<samechara> samechara;
    public int res;
    public String sv;

    public charainfoOutManager ConvertTocharainfo()
    {
        charainfoOutManager ret = new charainfoOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.charainfo = new HashMap<>();

        for (charainfo item : this.charainfo)
        {
            ret.charainfo.put(item.cid, item);
        }

        return ret;
    }

    public charalbOutManager ConvertTocharalb()
    {
        charalbOutManager ret = new charalbOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.charalb = new HashMap<>();

        for (charalb item : this.charalb)
        {
            ret.charalb.put(item.id, item);
        }

        return ret;
    }

    public charareinOutManager ConvertTochararein()
    {
        charareinOutManager ret = new charareinOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.chararein = new HashMap<>();

        for (chararein item : this.chararein)
        {
            ret.chararein.put(item.id, item);
        }

        return ret;
    }

    public samecharaOutManager ConvertTosamechara()
    {
        samecharaOutManager ret = new samecharaOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.samechara = new HashMap<>();

        for (samechara item : this.samechara)
        {
            ret.samechara.put(item.cid, item);
        }

        return ret;
    }
}