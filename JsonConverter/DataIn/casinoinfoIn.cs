using JsonConverter.DataOut;
using System.Collections.Generic;

namespace JsonConverter.DataIn
{
    public class high_and_lowIn
    {
        public int deck_id { get; set; }
        public string text { get; set; }
        public List<int> rate { get; set; }
        public List<int> cards { get; set; }
        public int start_time { get; set; }
        public int end_time { get; set; }
        public int entry_fee { get; set; }
    }

    public class casino_raceIn
    {
        public int tournament_id { get; set; }
        public int tournament_type { get; set; }
        public string tournament_name { get; set; }
        public int start { get; set; }
        public int end { get; set; }
        public int bet_min { get; set; }
        public int bet_max { get; set; }
        public int presentation_threshold1 { get; set; }
        public int presentation_threshold2 { get; set; }
    }

    public class casinoinfoInManager
    {
        public int deceive { get; set; }
        public List<high_and_lowIn> high_and_low { get; set; }
        public List<casino_raceIn> casino_race { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public casino_raceOutManager ConvertTocasino_race()
        {
            casino_raceOutManager ret = new casino_raceOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                casino_race = new Dictionary<int, casino_raceOut>(),
            };

            foreach (casino_raceIn race in this.casino_race)
            {
                ret.casino_race.Add(race.tournament_id, new casino_raceOut()
                {
                    bet_max = race.bet_max,
                    bet_min = race.bet_min,
                    end = race.end,
                    presentation_threshold1 = race.presentation_threshold1,
                    presentation_threshold2 = race.presentation_threshold2,
                    start = race.start,
                    tournament_id = race.tournament_id,
                    tournament_name = race.tournament_name,
                    tournament_type = race.tournament_type,
                });
            }

            return ret;
        }

        public high_and_lowOutManager ConvertTohigh_and_low()
        {
            high_and_lowOutManager ret = new high_and_lowOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                high_and_low = new Dictionary<int, high_and_lowOut>(),
            };

            foreach (high_and_lowIn card in this.high_and_low)
            {
                ret.high_and_low.Add(card.deck_id, new high_and_lowOut()
                {
                    cards = card.cards,
                    deck_id = card.deck_id,
                    end_time = card.end_time,
                    entry_fee = card.entry_fee,
                    rate = card.rate,
                    start_time = card.start_time,
                    text = card.text,
                });
            }

            return ret;
        }
    }
}
