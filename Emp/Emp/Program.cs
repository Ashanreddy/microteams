using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Emp
{
    class Employee
    {
        private float salary;

        public void AccessSalary()
        {
            Console.WriteLine("Employee  salary is:" + salary);
        }
    }
        internal class Program
        {
            static void Main(string[] args)
            {
                Employee emp = new Employee();
                emp.AccessSalary();
           
            }
        }
    }
