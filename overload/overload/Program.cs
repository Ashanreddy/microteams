using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace overload
{
    public class OverLoad
    {
        public int add(int a,int b)
        {
return a+ b;
        }
        public int add(int a,int b ,int c)
        {
            return a + b + c;
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            OverLoad overLoad = new OverLoad();
            overLoad.add(1,2);
            overLoad.add(2,3,7);
            Console.WriteLine(overLoad.add(1, 2));
            Console.WriteLine(overLoad.add(2, 3,7));

        }
    }
}
