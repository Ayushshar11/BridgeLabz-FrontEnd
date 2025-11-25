// Q1 – The Startup Morning: Async Coffee Maker
// Each step returns a Promise that resolves after 1-2 seconds.
// The process uses Promise chaining (.then()) and .catch() for errors.

function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000); // 1-2 seconds
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Boiler failed'));
      console.log('Water boiled');
      resolve('Boiled water');
    }, randomDelay());
  });
}

function brewCoffee(boiled) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Brewing failed'));
      console.log('Coffee brewed using ->', boiled);
      resolve('Brewed coffee');
    }, randomDelay());
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) return reject(new Error('Cup broken'));
      console.log('Coffee poured into cup ->', coffee);
      resolve('Coffee ready for the team!');
    }, randomDelay());
  });
}

// Use Promise chaining
boilWater()
  .then(brewCoffee)
  .then(pourIntoCup)
  .then(finalMsg => console.log(finalMsg))
  .catch(err => console.error('Coffee process failed:', err.message));

// Export for testing (Node)
if (typeof module !== 'undefined') module.exports = { boilWater, brewCoffee, pourIntoCup };
