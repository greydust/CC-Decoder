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
        static void Main(string[] args)
        {
            JsonSerializerSettings setting = new JsonSerializerSettings()
            {
                Formatting = Formatting.Indented,
            };
            setting.Converters.Add(new MyConverter());

            {
                string rawString = File.ReadAllText("RawData/battleinfo.data5.raw");
                battle_bgInManager data = JsonConvert.DeserializeObject<battle_bgInManager>(rawString);
                battle_bgOutManager convertedData = data.Convert();
                string convertedString = JsonConvert.SerializeObject(convertedData, setting);
                File.WriteAllText("ConvertedData/battleinfo.data5.converted", convertedString);
            }
            {
                string rawData = File.ReadAllText("RawData/booklist.data5.raw");
                booklistInManager data = JsonConvert.DeserializeObject<booklistInManager>(rawData);
                booklistOutManager convertedData = data.Convert();
                string convertedString = JsonConvert.SerializeObject(convertedData, setting);
                File.WriteAllText("ConvertedData/booklist.data5.converted", convertedString);
            }
            {
                string rawData = File.ReadAllText("RawData/bossinfo.data5.raw");
                bossinfoInManager data = JsonConvert.DeserializeObject<bossinfoInManager>(rawData);

                bossskillOutManager convertedData1 = data.ConvertTobossskill();
                string convertedString1 = JsonConvert.SerializeObject(convertedData1, setting);
                File.WriteAllText("ConvertedData/bossskill.data5.converted", convertedString1);

                bosspatternOutManager convertedData2 = data.ConvertTobosspattern();
                string convertedString2 = JsonConvert.SerializeObject(convertedData2, setting);
                File.WriteAllText("ConvertedData/bosspattern.data5.converted", convertedString2);
            }
            {
                string rawData = File.ReadAllText("RawData/casinoinfo.data5.raw");
                casinoinfoInManager data = JsonConvert.DeserializeObject<casinoinfoInManager>(rawData);

                casino_raceOutManager convertedData1 = data.ConvertTocasino_race();
                string convertedString1 = JsonConvert.SerializeObject(convertedData1, setting);
                File.WriteAllText("ConvertedData/casino_race.data5.converted", convertedString1);

                high_and_lowOutManager convertedData2 = data.ConvertTohigh_and_low();
                string convertedString2 = JsonConvert.SerializeObject(convertedData2, setting);
                File.WriteAllText("ConvertedData/high_and_low.data5.converted", convertedString2);
            }
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
