using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace asha
{
    class MyClass
    {
        int a = 10;
        static void Main(string[] args)
        {
            MyClass t1 = new MyClass();
            MyClass t2 = new MyClass();
            Console.WriteLine(t1.a);
            Console.WriteLine(t2.a);
        }
    }
}