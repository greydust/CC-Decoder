using JsonConverter.DataOut;
using System.Collections.Generic;

namespace JsonConverter.DataIn
{
    public class booklistIn
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
        public List<booklistIn> list { get; set; }
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
                    list = new Dictionary<int, booklistOut>(),
                });

                foreach (booklistIn bl in blType.list)
                {
                    ret.booklist[blType.type].list.Add(bl.id, new booklistOut()
                    {
                        desc = bl.desc,
                        id = bl.id,
                        quest_list = bl.quest_list,
                        release_time = bl.release_time,
                        release_type = bl.release_type,
                        title = bl.title,
                    });
                }
            }

            return ret;
        }
    }
}
