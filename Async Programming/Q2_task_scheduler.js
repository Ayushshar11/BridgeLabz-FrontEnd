// Q2 – Task Scheduler: Micro vs Macro Challenge
console.log('Start');

setTimeout(() => {
  console.log('setTimeout (macrotask) callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise.then (microtask) callback');
});

console.log('Synchronous log');

console.log('End');

/*
Explanation (in comments):
- Output order will be:
  Start
  Synchronous log
  End
  Promise.then (microtask) callback
  setTimeout (macrotask) callback
- Reason: Microtasks (Promise callbacks) run immediately after the current call stack finishes and before the event loop proceeds to the macrotask queue (which includes setTimeout).
*/
