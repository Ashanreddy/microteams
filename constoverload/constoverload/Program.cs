using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace constoverload
{
    public class ConstOverLoad
    {
        int height;
        int width;
         public ConstOverLoad(int a,int b)
        {
height = a;
            width = b;
        }
        public  ConstOverLoad(int size)
        {
           height=size;
            width=size;
        }
        public int rectangle(int a,int b)
        {
            return a*b;
        }
        public int square(int size)
        {
            return size * size;
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            ConstOverLoad rect = new ConstOverLoad(23,56);
            ConstOverLoad square = new ConstOverLoad(34);
            Console.WriteLine(rect.rectangle(2,5));
            Console.WriteLine(square.square(2));
        }
    }
}
