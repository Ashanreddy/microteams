using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace add1
{
    
    
    
     class testMaths
    {
        static void Main(string[] args)
        {
        int x, y, result,result1;
            
            Console.WriteLine("enter first number:");
            x = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("enter second number:");
             y = Convert.ToInt32(Console.ReadLine());
        result = x + y;
        result1 = x-y;
        Console.WriteLine("addition of two numbers:"+result);
        Console.WriteLine("subtraction of two numbers:"+result1);

        }
    }
}
