using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace asha2
{
    public class MyClass
    {
        public void PrintDateTime()
        {
            DateTime dateTime = DateTime.Now;
            Console.WriteLine(dateTime);
            Console.ReadLine();
        }

    }

        internal class Program
        {
            static void Main(string[] args)
            {
                MyClass myClass = new MyClass();
                
                myClass.PrintDateTime();
                
            }
        }
    }

