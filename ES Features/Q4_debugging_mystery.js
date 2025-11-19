// Q4 – Debugging Mystery
"use strict";
// Original code threw because 'greeting' was being assigned without declaration under strict mode.
// Fix: declare greeting with let/var/const. Explain via comments.

function showMessage() {
  // In strict mode, assigning to an undeclared identifier throws a ReferenceError.
  // Fix by declaring the variable in the appropriate scope.
  let greeting = "Welcome";
  console.log(greeting);
}
showMessage();

// Notes for debugger:
// - Add watch for 'greeting' inside showMessage to observe its value and scope.
// - In VS Code, add a breakpoint at console.log and inspect the call stack.