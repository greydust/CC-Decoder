using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataIn
{
    public class sell_ring
    {
        public List<int> chara { get; set; }
        public List<int> chara_rf { get; set; }
        public List<int> chara_lb { get; set; }
        public List<int> weapon_rf { get; set; }
        public List<int> weapon_ev { get; set; }
    }

    public class purchase_regulation
    {
        public int age { get; set; }
        public int limit { get; set; }
    }

    public class global
    {
        public int tmp_interval { get; set; }
        public int purchase { get; set; }
        public int raid_item { get; set; }
        public int review { get; set; }
    }

    public class expup
    {
        public int id { get; set; }
        public int start { get; set; }
        public int end { get; set; }
        public double exp_rate { get; set; }
        public List<int> cids { get; set; }
    }

    public class weaponcompose
    {
        public bool weapon_compose_disabled { get; set; }
    }

    public class party_opt
    {
        public int type { get; set; }
        public int cost_border1 { get; set; }
        public int cost_border2 { get; set; }
    }

    public class data
    {
        public global global { get; set; }
        public object cover { get; set; }
        public object raid { get; set; }
        public object totalwar { get; set; }
        public List<object> subjugation { get; set; }
        public expup expup { get; set; }
        public weaponcompose weaponcompose { get; set; }
        public party_opt party_opt { get; set; }
    }

    public class body
    {
        public int type { get; set; }
        public data data { get; set; }
        public int proc { get; set; }
    }

    public class mVer
    {
        public int charainfo { get; set; }
        public int weaponlist { get; set; }
        public int skilllist { get; set; }
        public int worldinfo { get; set; }
        public int episodeinfo { get; set; }
        public int questdigest { get; set; }
        public int itemlist { get; set; }
        public int booklist { get; set; }
        public int motionlist { get; set; }
        public int missionlist { get; set; }
        public int repeatmissionlist { get; set; }
        public int bossinfo { get; set; }
        public int battleinfo { get; set; }
        public int homelist { get; set; }
        public int supporterskill { get; set; }
        public int subjugationexpeditioninfo { get; set; }
        public int create_weap { get; set; }
        public int explorerinfo { get; set; }
        public int explorerlocation { get; set; }
        public int weaponcompose { get; set; }
        public int teacherdisciple { get; set; }
        public int weaponcomposeevent { get; set; }
        public int various { get; set; }
        public int eventplace { get; set; }
        public int eventbadge { get; set; }
        public int casinoinfo { get; set; }
        public int reload { get; set; }
        public int servertime { get; set; }
    }

    public class constIn
    {
        public int stamina_recover { get; set; }
        public int power_recover { get; set; }
        public int exp_up { get; set; }
        public int card_limit { get; set; }
        public int present_recv { get; set; }
        public sell_ring sell_ring { get; set; }
        public bool resume_update { get; set; }
        public bool friend { get; set; }
        public int friend_recycle { get; set; }
        public int friend_last { get; set; }
        public int helper_recycle { get; set; }
        public int mission_grace_period { get; set; }
        public List<purchase_regulation> purchase_regulation { get; set; }
        public int cut_stamina_recover { get; set; }
        public int raid_anger_rescue_max { get; set; }
        public bool tutorial_name_skip { get; set; }
        public int raid_relief_login_border { get; set; }
        public int casino_coin_limit { get; set; }
        public int casino_coin_exchange_limit { get; set; }
        public int casino_coin_price { get; set; }
        public int res { get; set; }
        public List<body> body { get; set; }
        public mVer mVer { get; set; }
        public string sv { get; set; }
    }
}
