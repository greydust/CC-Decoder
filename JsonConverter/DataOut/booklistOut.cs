using JsonConverter.DataIn;
using System.Collections.Generic;


namespace JsonConverter.DataOut
{
    public class booklistOutType
    {
        public int type { get; set; }
        public Dictionary<int, booklist> list { get; set; }
    }

    public class booklistOutManager
    {
        public int deceive { get; set; }
        public Dictionary<int, booklistOutType> booklist { get; set; }
        public int res { get; set; }
        public string sv { get; set; }
    }
}
