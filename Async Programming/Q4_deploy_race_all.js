// Q4 – DevOps Delay: Async Timeout Race

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject(new Error('Server A failed'));
      resolve('Server A deployment complete (2s)');
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject(new Error('Server B failed'));
      resolve('Server B deployment complete (3s)');
    }, 3000);
  });
}

// Promise.all -> wait for all
Promise.all([serverA(), serverB()])
  .then(results => {
    console.log('Deployment completed for all servers');
    console.table(results);
  })
  .catch(err => console.error('Deployment error (all):', err.message));

// Promise.race -> fastest responder
Promise.race([serverA(), serverB()])
  .then(result => console.log('Fastest response:', result))
  .catch(err => console.error('Deployment error (race):', err.message));

// Export for testing
if (typeof module !== 'undefined') module.exports = { serverA, serverB };
