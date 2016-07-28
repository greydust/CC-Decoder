package DataIn;

import java.util.HashMap;
import java.util.List;

import DataOut.casino_raceOutManager;
import DataOut.high_and_lowOutManager;

public class casinoinfoInManager
{
    public int deceive;
    public List<high_and_low> high_and_low;
    public List<casino_race> casino_race;
    public int res;
    public String sv;

    public casino_raceOutManager ConvertTocasino_race()
    {
        casino_raceOutManager ret = new casino_raceOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.casino_race = new HashMap<>();

        for (casino_race item : this.casino_race)
        {
            ret.casino_race.put(item.tournament_id, item);
        }

        return ret;
    }

    public high_and_lowOutManager ConvertTohigh_and_low()
    {
        high_and_lowOutManager ret = new high_and_lowOutManager();
        ret.deceive = this.deceive;
        ret.res = this.res;
        ret.sv = this.sv;
        ret.high_and_low = new HashMap<>();

        for (high_and_low item : this.high_and_low)
        {
            ret.high_and_low.put(item.deck_id, item);
        }

        return ret;
    }
}