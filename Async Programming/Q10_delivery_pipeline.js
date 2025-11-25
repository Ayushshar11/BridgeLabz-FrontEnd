// Q10 – The Final Delivery: Async Pipeline Debugger

function randDelay() {
  return 1000 + Math.floor(Math.random() * 1000); // 1-2s
}

function step(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error(`${name} failed`));
      console.log(`Step: ${name}`);
      resolve(`${name} done`);
    }, randDelay());
  });
}

async function runPipeline() {
  console.log('Start Pipeline');
  try {
    await step('Order taken');
    await step('Food prepared');
    await step('Package ready');
    await step('Out for delivery');
    await step('Delivered');
    console.log('Delivery completed!');
  } catch (err) {
    console.error('Pipeline failed!', err.message);
  }
}

// Run the pipeline when this file is executed
runPipeline();

// Export for testing
if (typeof module !== 'undefined') module.exports = { step, runPipeline };
