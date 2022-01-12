using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace inheritance1
{
    public class Employee
    {
        public void show()
        {
            Console.WriteLine("show the employee details");
        }
        public class SalaryEmployee : Employee
        {
            public void Display()
            {
                show();
                Console.WriteLine("display the employee salary");
            }
        }



        internal class Program
        {
            static void Main(string[] args)
            {
                Employee emp = new Employee();
                SalaryEmployee emp1 = new SalaryEmployee();
                emp.show();
                emp1.Display();
            }
        }
    }
}