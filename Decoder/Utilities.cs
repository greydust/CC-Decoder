using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;

public class Utilities
{
    public static string UnescapeUnicodeString(string str)
    {
        string ret = "";
        foreach (char c in str)
        {
            if (c > 127)
            {
                string unescapedString = "\\u" + ((int)c).ToString("x4");
                ret = ret + unescapedString;
            }
            else
            {
                ret = ret + c;
            }
        }
        return ret;
    }

    public static string EscapeUnicodeString(string str)
    {
        return Regex.Replace(str, @"\\u(?<Value>[a-zA-Z0-9]{4})", m => {
            return ((char)int.Parse(m.Groups["Value"].Value, NumberStyles.HexNumber)).ToString();
        });
    }
}