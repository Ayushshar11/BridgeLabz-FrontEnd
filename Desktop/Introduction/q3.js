// Q3 Monthly Expense Tracker
let expenses = [5000, 1200, 8000, 2000, 1500];
let total = expenses.reduce((a,b)=>a+b,0);
let avg = total / expenses.length;
let finalAmt = total + total*0.10; 

console.log("Total:", total.toFixed(2));
console.log("Average:", avg.toFixed(2));
console.log("After Tax:", finalAmt.toFixed(2));
