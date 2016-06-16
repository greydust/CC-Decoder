using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;

public class Utilities
{
    public static string EscapeUnicodeString(string str)
    {
        string ret = "";
        foreach (char c in str)
        {
            if (c > 127)
            {
                string escapedString = "\\u" + ((int)c).ToString("x4");
                ret = ret + escapedString;
            }
            else
            {
                ret = ret + c;
            }
        }
        return ret;
    }

    public static string UnescapeUnicodeString(string str)
    {
        return Regex.Replace(str, @"\\u(?<Value>[a-zA-Z0-9]{4})", m => {
            return ((char)int.Parse(m.Groups["Value"].Value, NumberStyles.HexNumber)).ToString();
        });
    }
}