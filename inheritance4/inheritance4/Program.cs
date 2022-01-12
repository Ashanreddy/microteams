using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace inheritance4
{
    public class MyClass
    {
        private int x;
        protected int y;
    }
    public class MyDerivedC : MyClass
    {
        int x = 21;
        int y = 45;

    }

    internal class Program
    {
        static void Main(string[] args)
        {
            MyDerivedC c = new MyDerivedC();
            MyClass my = new MyClass();
            Console.WriteLine(c.x);
            Console.WriteLine(c.y);
        }
    }
}
