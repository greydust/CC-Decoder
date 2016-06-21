using JsonConverter.DataIn;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using JsonConverter.DataOut;

namespace JsonConverter
{
    class Program
    {
        private static string errorMessage = "";
        public static void JsonErrorHandler(object sender, Newtonsoft.Json.Serialization.ErrorEventArgs args)
        {
            args.ErrorContext.Handled = true;
            errorMessage += args.ErrorContext.Error.Message + '\n';
        }

        static void Main(string[] args)
        {

            JsonSerializerSettings deserializeSetting = new JsonSerializerSettings()
            {
                MissingMemberHandling = MissingMemberHandling.Error,
            };
            deserializeSetting.Error += JsonErrorHandler;

            JsonSerializerSettings serializeSetting = new JsonSerializerSettings()
            {
                Formatting = Formatting.Indented,
                NullValueHandling = NullValueHandling.Ignore,
            };
            serializeSetting.Converters.Add(new MyConverter());

            {
                string rawString = File.ReadAllText("RawData/battleinfo.data5.raw");
                battleinfoInManager data = JsonConvert.DeserializeObject<battleinfoInManager>(rawString, deserializeSetting);

                {
                    battle_bgOutManager convertedData = data.Convert();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/battleinfo.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/booklist.data5.raw");
                booklistInManager data = JsonConvert.DeserializeObject<booklistInManager>(rawData);

                {
                    booklistOutManager convertedData = data.Convert();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/booklist.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/bossinfo.data5.raw");
                bossinfoInManager data = JsonConvert.DeserializeObject<bossinfoInManager>(rawData);

                {
                    bossskillOutManager convertedData = data.ConvertTobossskill();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/bossskill.data5.converted", convertedString);
                }
                {
                    bosspatternOutManager convertedData = data.ConvertTobosspattern();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/bosspattern.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/casinoinfo.data5.raw");
                casinoinfoInManager data = JsonConvert.DeserializeObject<casinoinfoInManager>(rawData);

                {
                    casino_raceOutManager convertedData = data.ConvertTocasino_race();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/casino_race.data5.converted", convertedString);
                }
                {
                    high_and_lowOutManager convertedData = data.ConvertTohigh_and_low();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/high_and_low.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/charainfo.data5.raw");
                charainfoInManager data = JsonConvert.DeserializeObject<charainfoInManager>(rawData);

                {
                    charainfoOutManager convertedData = data.ConvertTocharainfo();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/charainfo.data5.converted", convertedString);
                }
                {
                    charalbOutManager convertedData = data.ConvertTocharalb();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/charalb.data5.converted", convertedString);
                }
                {
                    charareinOutManager convertedData = data.ConvertTochararein();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/chararein.data5.converted", convertedString);
                }
                {
                    samecharaOutManager convertedData = data.ConvertTosamechara();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/samechara.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/const.data5.raw");
                constIn data = JsonConvert.DeserializeObject<constIn>(rawData);
                string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                File.WriteAllText("ConvertedData/const.data5.converted", convertedString);
            }
            {
                string rawData = File.ReadAllText("RawData/create_weap.data5.raw");
                create_weapInManager data = JsonConvert.DeserializeObject<create_weapInManager>(rawData);
                string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                File.WriteAllText("ConvertedData/create_weap.data5.converted", convertedString);
            }
            {
                string rawData = File.ReadAllText("RawData/episodeinfo.data5.raw");
                episodeinfoInManager data = JsonConvert.DeserializeObject<episodeinfoInManager>(rawData);

                {
                    episodeinfoOutManager convertedData = data.Convert();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/episodeinfo.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/eventbadge.data5.raw");
                eventbadgeInManager data = JsonConvert.DeserializeObject<eventbadgeInManager>(rawData);
                string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                File.WriteAllText("ConvertedData/eventbadge.data5.converted", convertedString);
            }
            {
                string rawData = File.ReadAllText("RawData/eventplace.data5.raw");
                eventplaceIn data = JsonConvert.DeserializeObject<eventplaceIn>(rawData);
                string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                File.WriteAllText("ConvertedData/eventplace.data5.converted", convertedString);
            }
            {
                string rawData = File.ReadAllText("RawData/explorerinfo.data5.raw");
                explorerinfoInManager data = JsonConvert.DeserializeObject<explorerinfoInManager>(rawData);

                {
                    explorer_infoOutManager convertedData = data.Convert();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/explorerinfo.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/explorerlocation.data5.raw");
                explorerlocationInManager data = JsonConvert.DeserializeObject<explorerlocationInManager>(rawData);

                {
                    explorer_locationOutManager convertedData = data.Convert();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/explorerlocation.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/homelist.data5.raw");
                homelistInManager data = JsonConvert.DeserializeObject<homelistInManager>(rawData);

                {
                    homelistOutManager convertedData = data.Convert();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/homelist.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/itemlist.data5.raw");
                itemlistInManager data = JsonConvert.DeserializeObject<itemlistInManager>(rawData);

                {
                    itemlistOutManager convertedData = data.Convert();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/itemlist.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/motionlist.data5.raw");
                motionlistInManager data = JsonConvert.DeserializeObject<motionlistInManager>(rawData);

                {
                    motionlistOutManager convertedData = data.Convert();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/itemlist.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/questdigest.data5.raw");
                questdigestInManager data = JsonConvert.DeserializeObject<questdigestInManager>(rawData);

                {
                    questdigestOutManager convertedData = data.Convert();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/questdigest.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/repeatmissionlist.data5.raw");
                repeatmissionlistInManager data = JsonConvert.DeserializeObject<repeatmissionlistInManager>(rawData);
                string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                File.WriteAllText("ConvertedData/repeatmissionlist.data5.converted", convertedString);
            }
            {
                string rawData = File.ReadAllText("RawData/skilllist.data5.raw");
                skilllistInManager data = JsonConvert.DeserializeObject<skilllistInManager>(rawData);

                {
                    skilllistOutManager convertedData = data.Convert();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/skilllist.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/subjugationexpeditioninfo.data5.raw");
                subjugationexpeditioninfoIn data = JsonConvert.DeserializeObject<subjugationexpeditioninfoIn>(rawData);
                string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                File.WriteAllText("ConvertedData/subjugationexpeditioninfo.data5.converted", convertedString);
            }
            {
                string rawData = File.ReadAllText("RawData/supporterskill.data5.raw");
                supporterskillInManager data = JsonConvert.DeserializeObject<supporterskillInManager>(rawData);

                {
                    supporterskillOutManager convertedData = data.Convert();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/supporterskill.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/teacherdisciple.data5.raw");
                teacherdiscipleInManager data = JsonConvert.DeserializeObject<teacherdiscipleInManager>(rawData);
                string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                File.WriteAllText("ConvertedData/teacherdisciple.data5.converted", convertedString);
            }
            {
                string rawData = File.ReadAllText("RawData/various.data5.raw");
                variousIn data = JsonConvert.DeserializeObject<variousIn>(rawData);
                string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                File.WriteAllText("ConvertedData/various.data5.converted", convertedString);
            }
            {
                string rawData = File.ReadAllText("RawData/weaponcompose.data5.raw");
                weaponcomposeInManager data = JsonConvert.DeserializeObject<weaponcomposeInManager>(rawData);
                string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                File.WriteAllText("ConvertedData/weaponcompose.data5.converted", convertedString);
            }
            {
                string rawData = File.ReadAllText("RawData/weaponcomposeevent.data5.raw");
                weaponcomposeeventInManager data = JsonConvert.DeserializeObject<weaponcomposeeventInManager>(rawData);

                {
                    weaponcomposeeventOutManager convertedData = data.Convert();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/weaponcomposeevent.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/weaponlist.data5.raw");
                weaponlistInManager data = JsonConvert.DeserializeObject<weaponlistInManager>(rawData);

                {
                    weaponlistOutManager convertedData = data.ConvertToweaponlist();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/weaponlist.data5.converted", convertedString);
                }
                {
                    evolveOutManager convertedData = data.ConvertToevolve();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/evolve.data5.converted", convertedString);
                }
                {
                    reinforceOutManager convertedData = data.ConvertToreinforce();
                    string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                    File.WriteAllText("ConvertedData/reinforce.data5.converted", convertedString);
                }
            }
            {
                string rawData = File.ReadAllText("RawData/worldinfo.data5.raw");
                worldinfoInManager data = JsonConvert.DeserializeObject<worldinfoInManager>(rawData);
                string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                File.WriteAllText("ConvertedData/worldinfo.data5.converted", convertedString);
            }


            File.WriteAllText("convertlog.txt", errorMessage);
        }
    }

    public class MyConverter : Newtonsoft.Json.JsonConverter
    {
        public override bool CanConvert(Type objectType)
        {
            return (objectType.IsGenericType && objectType.GetGenericTypeDefinition() == typeof(List<>));
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            writer.WriteRawValue(JsonConvert.SerializeObject(value, Formatting.None));
        }
    }
}
