package DataIn;

import org.apache.commons.lang3.tuple.ImmutablePair;

import java.util.HashMap;
import java.util.List;

import DataOut.episodeinfoOutManager;

public class episodeinfoInManager
{
    public int deceive;
    public List<episodeinfo> episodeinfo;
    public int res;
    public String sv;

    public episodeinfoOutManager Convert()
    {
        episodeinfoOutManager ret = new episodeinfoOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.episodeinfo = new HashMap<>();

        for (episodeinfo item : this.episodeinfo)
        {
            ret.episodeinfo.put(new ImmutablePair<>(item.id, item.type), item);
        }

        return ret;
    }
}