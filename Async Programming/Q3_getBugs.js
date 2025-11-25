// Q3 – Bug Tracker: Callback to Promise Migration

// Original callback version (for reference):
// function fetchBugs(callback) {
//   setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failed = Math.random() < 0.2; // 20% failure chance
      if (failed) return reject(new Error('Failed to fetch bugs from API'));
      resolve(['UI glitch', 'API timeout', 'Login failure']);
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.log('Bugs fetched:');
    console.table(bugs.map((b, i) => ({ id: i + 1, bug: b })));
  })
  .catch(err => console.error('Error fetching bugs:', err.message));

// Export for testing
if (typeof module !== 'undefined') module.exports = { getBugs };
