﻿using JsonConverter.DataIn;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using JsonConverter.DataOut;
using Ionic.Zlib;

namespace JsonConverter
{
    class Program
    {
        enum DecryptType
        {
            JP = 0,
            TW = 1,
        };

        private static string errorMessage = "";
        public static void JsonErrorHandler(object sender, Newtonsoft.Json.Serialization.ErrorEventArgs args)
        {
            args.ErrorContext.Handled = true;
            errorMessage += args.ErrorContext.Error.Message + '\n';
        }

        private static string ReadFomFile(string path, DecryptType type)
        {
            if (type == DecryptType.JP)
            {
                // not done yet
                return "";
            }
            else if (type == DecryptType.TW)
            {
                byte[] file = File.ReadAllBytes(path);
                string ret = GZipStream.UncompressString(file);
                return ret;
            }

            return "";
        }

        private static void ConvertJsonData(string prefix, DecryptType type)
        {
            Directory.CreateDirectory("ConvertedData/" + prefix);

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

            JsonForFirebase firebase = new JsonForFirebase();
            string rawData = "";
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "battleinfo.data5", type);
                    battleinfoInManager data = JsonConvert.DeserializeObject<battleinfoInManager>(rawData, deserializeSetting);

                    {
                        battle_bgOutManager convertedData = data.Convert();
                        firebase.battle_bg = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "battleinfo.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "battleinfo.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "booklist.data5", type);
                    booklistInManager data = JsonConvert.DeserializeObject<booklistInManager>(rawData);

                    {
                        booklistOutManager convertedData = data.Convert();
                        firebase.booklist = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "booklist.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "booklist.data5.converted", rawData);
                }
            }

            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "bossinfo.data5", type);
                    bossinfoInManager data = JsonConvert.DeserializeObject<bossinfoInManager>(rawData);

                    {
                        bossskillOutManager convertedData = data.ConvertTobossskill();
                        firebase.bossskill = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "bossskill.data5.converted", convertedString);
                    }
                    {
                        bosspatternOutManager convertedData = data.ConvertTobosspattern();
                        firebase.bosspattern = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "bosspattern.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "bossinfo.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "casinoinfo.data5", type);
                    casinoinfoInManager data = JsonConvert.DeserializeObject<casinoinfoInManager>(rawData);

                    {
                        casino_raceOutManager convertedData = data.ConvertTocasino_race();
                        firebase.casino_race = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "casino_race.data5.converted", convertedString);
                    }
                    {
                        high_and_lowOutManager convertedData = data.ConvertTohigh_and_low();
                        firebase.high_and_low = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "high_and_low.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "casinoinfo.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "charainfo.data5", type);
                    charainfoInManager data = JsonConvert.DeserializeObject<charainfoInManager>(rawData);

                    {
                        charainfoOutManager convertedData = data.ConvertTocharainfo();
                        firebase.charainfo = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "charainfo.data5.converted", convertedString);
                    }
                    {
                        charalbOutManager convertedData = data.ConvertTocharalb();
                        firebase.charalb = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "charalb.data5.converted", convertedString);
                    }
                    {
                        charareinOutManager convertedData = data.ConvertTochararein();
                        firebase.chararein = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "chararein.data5.converted", convertedString);
                    }
                    {
                        samecharaOutManager convertedData = data.ConvertTosamechara();
                        firebase.samechara = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "samechara.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "charainfo.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "const.data5", type);
                    constIn data = JsonConvert.DeserializeObject<constIn>(rawData);
                    firebase.consts = data;
                    string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                    File.WriteAllText("ConvertedData/" + prefix + "const.data5.converted", convertedString);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "const.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "create_weap.data5", type);
                    create_weapInManager data = JsonConvert.DeserializeObject<create_weapInManager>(rawData);
                    firebase.create_weap = data;
                    string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                    File.WriteAllText("ConvertedData/" + prefix + "create_weap.data5.converted", convertedString);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "create_weap.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "episodeinfo.data5", type);
                    episodeinfoInManager data = JsonConvert.DeserializeObject<episodeinfoInManager>(rawData);

                    {
                        episodeinfoOutManager convertedData = data.Convert();
                        firebase.episodeinfo = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "episodeinfo.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "episodeinfo.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "eventbadge.data5", type);
                    eventbadgeInManager data = JsonConvert.DeserializeObject<eventbadgeInManager>(rawData);
                    firebase.eventbadge = data;
                    string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                    File.WriteAllText("ConvertedData/" + prefix + "eventbadge.data5.converted", convertedString);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "eventbadge.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "eventplace.data5", type);
                    eventplaceIn data = JsonConvert.DeserializeObject<eventplaceIn>(rawData);
                    firebase.eventplace = data;
                    string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                    File.WriteAllText("ConvertedData/" + prefix + "eventplace.data5.converted", convertedString);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "eventplace.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "explorerinfo.data5", type);
                    explorerinfoInManager data = JsonConvert.DeserializeObject<explorerinfoInManager>(rawData);

                    {
                        explorer_infoOutManager convertedData = data.Convert();
                        firebase.explorer_info = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "explorerinfo.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "explorerinfo.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "explorerlocation.data5", type);
                    explorerlocationInManager data = JsonConvert.DeserializeObject<explorerlocationInManager>(rawData);

                    {
                        explorer_locationOutManager convertedData = data.Convert();
                        firebase.explorer_location = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "explorerlocation.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "explorerlocation.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "homelist.data5", type);
                    homelistInManager data = JsonConvert.DeserializeObject<homelistInManager>(rawData);

                    {
                        homelistOutManager convertedData = data.Convert();
                        firebase.homelist = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "homelist.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "homelist.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "itemlist.data5", type);
                    itemlistInManager data = JsonConvert.DeserializeObject<itemlistInManager>(rawData);

                    {
                        itemlistOutManager convertedData = data.Convert();
                        firebase.itemlist = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "itemlist.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "itemlist.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "motionlist.data5", type);
                    motionlistInManager data = JsonConvert.DeserializeObject<motionlistInManager>(rawData);

                    {
                        motionlistOutManager convertedData = data.Convert();
                        firebase.motionlist = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "motionlist.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "motionlist.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "questdigest.data5", type);
                    questdigestInManager data = JsonConvert.DeserializeObject<questdigestInManager>(rawData);

                    {
                        questdigestOutManager convertedData = data.Convert();
                        firebase.questdigest = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "questdigest.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "questdigest.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "repeatmissionlist.data5", type);
                    repeatmissionlistInManager data = JsonConvert.DeserializeObject<repeatmissionlistInManager>(rawData);
                    firebase.repeatmissionlist = data;
                    string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                    File.WriteAllText("ConvertedData/" + prefix + "repeatmissionlist.data5.converted", convertedString);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "repeatmissionlist.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "skilllist.data5", type);
                    skilllistInManager data = JsonConvert.DeserializeObject<skilllistInManager>(rawData);

                    {
                        skilllistOutManager convertedData = data.Convert();
                        firebase.skilllist = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "skilllist.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "skilllist.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "subjugationexpeditioninfo.data5", type);
                    subjugationexpeditioninfoIn data = JsonConvert.DeserializeObject<subjugationexpeditioninfoIn>(rawData);
                    firebase.subjugationexpeditioninfo = data;
                    string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                    File.WriteAllText("ConvertedData/" + prefix + "subjugationexpeditioninfo.data5.converted", convertedString);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "subjugationexpeditioninfo.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "supporterskill.data5", type);
                    supporterskillInManager data = JsonConvert.DeserializeObject<supporterskillInManager>(rawData);

                    {
                        supporterskillOutManager convertedData = data.Convert();
                        firebase.supporterskill = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "supporterskill.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "supporterskill.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "teacherdisciple.data5", type);
                    teacherdiscipleInManager data = JsonConvert.DeserializeObject<teacherdiscipleInManager>(rawData);
                    firebase.teacherdisciple = data;
                    string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                    File.WriteAllText("ConvertedData/" + prefix + "teacherdisciple.data5.converted", convertedString);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "teacherdisciple.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "various.data5", type);
                    variousIn data = JsonConvert.DeserializeObject<variousIn>(rawData);
                    firebase.various = data;
                    string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                    File.WriteAllText("ConvertedData/" + prefix + "various.data5.converted", convertedString);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "various.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "weaponcompose.data5", type);
                    weaponcomposeInManager data = JsonConvert.DeserializeObject<weaponcomposeInManager>(rawData);
                    firebase.weaponcompose = data;
                    string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                    File.WriteAllText("ConvertedData/" + prefix + "weaponcompose.data5.converted", convertedString);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "weaponcompose.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "weaponcomposeevent.data5", type);
                    weaponcomposeeventInManager data = JsonConvert.DeserializeObject<weaponcomposeeventInManager>(rawData);

                    {
                        weapon_compose_eventOutManager convertedData = data.Convert();
                        firebase.weapon_compose_event = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "weaponcomposeevent.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "weaponcomposeevent.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "weaponlist.data5", type);
                    weaponlistInManager data = JsonConvert.DeserializeObject<weaponlistInManager>(rawData);

                    {
                        weaponlistOutManager convertedData = data.ConvertToweaponlist();
                        firebase.weaponlist = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "weaponlist.data5.converted", convertedString);
                    }
                    {
                        evolveOutManager convertedData = data.ConvertToevolve();
                        firebase.evolve = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "evolve.data5.converted", convertedString);
                    }
                    {
                        reinforceOutManager convertedData = data.ConvertToreinforce();
                        firebase.reinforce = convertedData;
                        string convertedString = JsonConvert.SerializeObject(convertedData, serializeSetting);
                        File.WriteAllText("ConvertedData/" + prefix + "reinforce.data5.converted", convertedString);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "weaponlist.data5.converted", rawData);
                }
            }
            {
                try
                {
                    rawData = ReadFomFile("RawData/" + prefix + "worldinfo.data5", type);
                    worldinfoInManager data = JsonConvert.DeserializeObject<worldinfoInManager>(rawData);
                    firebase.worldinfo = data;
                    string convertedString = JsonConvert.SerializeObject(data, serializeSetting);
                    File.WriteAllText("ConvertedData/" + prefix + "worldinfo.data5.converted", convertedString);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message + "\n" + e.StackTrace);
                    File.WriteAllText("ConvertedData/" + prefix + "worldinfo.data5.converted", rawData);
                }
            }

            string firebaseString = JsonConvert.SerializeObject(firebase, serializeSetting);
            File.WriteAllText("ConvertedData/" + prefix + "firebase.json", firebaseString);

            File.WriteAllText("convertlog.txt", errorMessage);
        }

        static void Main(string[] args)
        {
            //ConvertJsonData("", DecryptType.JP);
            ConvertJsonData("TW/", DecryptType.TW);
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
