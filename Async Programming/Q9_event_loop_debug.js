// Q9 – Debugging the Event Loop
// Predicted output in comments:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log('Script start');
setTimeout(() => console.log('Timeout callback'), 0);
Promise.resolve().then(() => console.log('Promise callback'));
console.log('Script end');

/*
Explanation:
- The synchronous logs run first (Script start, Script end).
- Microtasks queued by Promise.resolve().then run next (Promise callback).
- Macrotasks like setTimeout run after microtasks (Timeout callback).
*/
