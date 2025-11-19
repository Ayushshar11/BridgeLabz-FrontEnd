// Q8 Employee Salary Projection
let salary = 30000;
let inc = 10;

let data = [];
for(let i=1; i<=5; i++){
    salary += salary * (inc/100);
    data.push({Year:i, Salary:Math.round(salary)});
}
console.table(data);
