// Q1. Scope Conflict Resolver
let bonus = 5000; // global

function calculateSalary(isPermanent) {
    let salary = 40000; // local
    if (isPermanent) {
        salary += bonus;
    }
    console.log("Total Salary:", salary);
}

calculateSalary(true);
calculateSalary(false);
