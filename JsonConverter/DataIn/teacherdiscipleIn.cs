using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class List
    {
        public string type { get; set; }
        public int id { get; set; }
        public int val { get; set; }
    }

    public class daily_reward
    {
        public int table_id { get; set; }
        public int suceeded { get; set; }
        public List<List> list { get; set; }
        public List<string> comment_list { get; set; }
    }

    public class rankup_thanksitem
    {
        public int id { get; set; }
        public int val { get; set; }
        public string type { get; set; }
    }

    public class rankup_thanks
    {
        public string lv { get; set; }
        public string comment { get; set; }
        public rankup_thanksitem item { get; set; }
    }

    public class graduate_thanksitem
    {
        public string type { get; set; }
        public int id { get; set; }
        public int val { get; set; }
    }

    public class graduate_thanks
    {
        public string comment { get; set; }
        public graduate_thanksitem item { get; set; }
    }

    public class setting
    {
        public int graduate_rank { get; set; }
        public int teacher_eligible_level { get; set; }
        public int disciple_resetable_noplay_interval { get; set; }
        public int teacher_resetable_nologin_interval { get; set; }
    }

    public class teacher_disciple
    {
        public List<daily_reward> daily_reward { get; set; }
        public List<rankup_thanks> rankup_thanks { get; set; }
        public graduate_thanks graduate_thanks { get; set; }
        public setting setting { get; set; }
    }

    public class teacherdiscipleInManager
    {
        public int deceive { get; set; }
        public teacher_disciple teacher_disciple { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
