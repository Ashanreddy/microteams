using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace myclass1
{
    public class MyClass1
    {
        public int x=20 , y=9 ;

        public void displayx()
        {
            Console.WriteLine(x);
        }
        public void displayy()
        {
            Console.WriteLine(y);
        }

    }

    internal class Program
    {
        static void Main(string[] args)
        {
            MyClass1 myClass1 = new MyClass1();
            myClass1.displayx();
            myClass1.x = 12;
            myClass1.y = 45;
            myClass1.displayy();
        }
    }
}
