using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonConverter.DataOut
{
    public class booklistOut
    {
        public int id { get; set; }
        public string title { get; set; }
        public string desc { get; set; }
        public int release_type { get; set; }
        public int release_time { get; set; }
        public List<int> quest_list { get; set; }
    }

    public class booklistOutType
    {
        public int type { get; set; }
        public Dictionary<int, booklistOut> list { get; set; }
    }

    public class booklistOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, booklistOutType> booklist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
