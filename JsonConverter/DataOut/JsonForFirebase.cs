using JsonConverter.DataIn;

namespace JsonConverter.DataOut
{
    public class JsonForFirebase
    {
        public battle_bgOutManager battle_bg { get; set; }
        public booklistOutManager booklist { get; set; }
        public bosspatternOutManager bosspattern { get; set; }
        public bossskillOutManager bossskill { get; set; }
        public casino_raceOutManager casino_race { get; set; }
        public charainfoOutManager charainfo { get; set; }
        public charalbOutManager charalb { get; set; }
        public charareinOutManager chararein { get; set; }
        public episodeinfoOutManager episodeinfo { get; set; }
        public evolveOutManager evolve { get; set; }
        public explorer_infoOutManager explorer_info { get; set; }
        public explorer_locationOutManager explorer_location { get; set; }
        public high_and_lowOutManager high_and_low { get; set; }
        public homelistOutManager homelist { get; set; }
        public itemlistOutManager itemlist { get; set; }
        public missionlistOutManager missionlist { get; set; }
        public motionlistOutManager motionlist { get; set; }
        public questdigestOutManager questdigest { get; set; }
        public reinforceOutManager reinforce { get; set; }
        public samecharaOutManager samechara { get; set; }
        public skilllistOutManager skilllist { get; set; }
        public supporterskillOutManager supporterskill { get; set; }
        public weapon_compose_eventOutManager weapon_compose_event { get; set; }
        public weaponlistOutManager weaponlist { get; set; }

        public constIn consts { get; set; }
        public create_weapInManager create_weap { get; set; }
        public eventbadgeInManager eventbadge { get; set; }
        public eventplaceIn eventplace { get; set; }
        public repeatmissionlistInManager repeatmissionlist { get; set; }
        public subjugationexpeditioninfoIn subjugationexpeditioninfo { get; set; }
        public teacherdiscipleInManager teacherdisciple { get; set; }
        public variousIn various { get; set; }
        public weaponcomposeInManager weaponcompose { get; set; }
        public worldinfoInManager worldinfo { get; set; }
    }
}
