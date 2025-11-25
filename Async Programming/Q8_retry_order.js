// Q8 – Order Processing Flow: Async Retry Mechanism

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? resolve('Order submitted') : reject(new Error('Submission failed'));
    }, 500);
  });
}

async function processOrder(maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return 'Processed';
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed`);
      if (attempt === maxAttempts) {
        throw new Error('Order could not be processed');
      }
      // small delay before retrying
      await new Promise(r => setTimeout(r, 300));
    }
  }
}

(async () => {
  try {
    await processOrder(3);
    console.log('Order processed successfully');
  } catch (err) {
    console.error(err.message);
  }
})();

// Export for testing
if (typeof module !== 'undefined') module.exports = { submitOrder, processOrder };
