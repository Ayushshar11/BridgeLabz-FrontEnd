// Q2 – Employee Bonus Calculator
"use strict";
// Convert salary and years to numbers, compute bonus and log formatted details.
// Use try...catch for conversion/missing property errors.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

(function calcBonuses(list) {
  for (let i = 0; i < list.length; i++) {
    try {
      const emp = list[i];
      if (!emp || !emp.name) throw new Error("Missing employee object or name");

      // Explicit conversion and validation
      const salary = Number(emp.salary);
      const years = Number(emp.years);

      if (Number.isNaN(salary)) throw new TypeError(`Invalid salary for ${emp.name}`);
      if (Number.isNaN(years)) throw new TypeError(`Invalid years for ${emp.name}`);

      const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

      // Template string output
      console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);

    } catch (err) {
      console.error(`Error processing employee at index ${i}:`, err.message);
    }
  }
})(employees);