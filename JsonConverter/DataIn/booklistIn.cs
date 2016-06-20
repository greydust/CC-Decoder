using JsonConverter.DataOut;
using System.Collections.Generic;

namespace JsonConverter.DataIn
{
    public class booklist
    {
        public int id { get; set; }
        public string title { get; set; }
        public string desc { get; set; }
        public int release_type { get; set; }
        public int release_time { get; set; }
        public List<int> quest_list { get; set; }
    }

    public class booklistInType
    {
        public int type { get; set; }
        public List<booklist> list { get; set; }
    }

    public class booklistInManager
    {
        public int deceive { get; set; }
        public List<booklistInType> booklist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }

        public booklistOutManager Convert()
        {
            booklistOutManager ret = new booklistOutManager()
            {
                deceive = this.deceive,
                res = this.res,
                sv = this.sv,
                booklist = new Dictionary<int, booklistOutType>(),
            };

            foreach (booklistInType blType in this.booklist)
            {
                ret.booklist.Add(blType.type, new booklistOutType()
                {
                    type = blType.type,
                    list = new Dictionary<int, booklist>(),
                });

                foreach (booklist item in blType.list)
                {
                    ret.booklist[blType.type].list.Add(item.id, item);
                }
            }

            return ret;
        }
    }
}
