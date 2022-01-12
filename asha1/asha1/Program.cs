using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace asha1
{
    class Person
    {
        int age=20;
        string name= "asha";
        
         public void Display()
            {
                Console.WriteLine(age + " " + name);
            }
        }
    
    internal class Program
    {
        static void Main(string[] args)
        {
            Person m1 = new Person();
            Person m2 = new Person();
            m1.Display();
            m2.Display();

        }
    }
}
