using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace overload1
{
    public class OverLoad2
    {
        public int add(int a,int b)
        {
            return a + b;
        }
        public string add(string s1,string s2)
        {
            return s1 + s2;
        }
            
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            OverLoad2 overLoad2 = new OverLoad2();
            overLoad2.add(23, 45);
            overLoad2.add("asha", "reddy");
            Console.WriteLine(overLoad2.add(23, 45));
            Console.WriteLine(overLoad2.add("asha", "reddy"));
        }
    }
}
