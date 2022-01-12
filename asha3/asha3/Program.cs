using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace asha3
{
    class coOrds
    {
        int x, y;
        public coOrds()
        {
            x = 0;
            y = 0;
        
        }
        public coOrds(int x,int y)
        {
            this.x = x; this.y = y;
        }

        internal class Program
        {
            static void Main(string[] args)
            {
                coOrds c1 = new coOrds(29,39);
                Console.WriteLine(c1.x + "  " + c1.y);
            }
        }
    }
}