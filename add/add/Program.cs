using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace add
{
    public class testMaths
    {
        int x, y;
        int sum,minus;
        public void add(int x,int y)
        {
            sum = x + y;
            Console.WriteLine("summ of two numbers is:"+sum);
        }
        public void sub(int x,int y)
        {
            minus = x - y;
            Console.WriteLine("subracton of two numbers is:"+minus);
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            testMaths a1 = new testMaths();
            a1.add(12, 34);
            a1.sub(12, 5);
           
        }
    }
}
