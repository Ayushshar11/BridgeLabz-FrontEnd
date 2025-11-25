// Q5 – Frontend Rush: Avoiding Callback Hell

// 5 async stages: design -> build -> test -> deploy -> celebrate
function stage(name, cb) {
  setTimeout(() => {
    console.log('Stage:', name);
    cb && cb();
  }, 1000);
}

// 1) Nested callbacks (callback hell)
function pipelineWithCallbacks() {
  stage('design', () => {
    stage('build', () => {
      stage('test', () => {
        stage('deploy', () => {
          stage('celebrate', () => {
            console.log('Pipeline (callbacks) finished');
          });
        });
      });
    });
  });
}

// 2) Cleaner async/await version
function wait(ms = 1000) {
  return new Promise(r => setTimeout(r, ms));
}

async function pipelineAsyncAwait() {
  try {
    console.log('Start pipeline (async/await)');
    await wait(); console.log('Stage: design');
    await wait(); console.log('Stage: build');
    await wait(); console.log('Stage: test');
    await wait(); console.log('Stage: deploy');
    await wait(); console.log('Stage: celebrate');
    console.log('Pipeline (async/await) finished');
  } catch (err) {
    console.error('Pipeline failed:', err.message);
  }
}

/*
Why async/await improves readability:
- Replaces deeply nested callbacks with linear, top-to-bottom code that is easy to follow.
- Error handling can be centralized with try/catch instead of multiple callback error checks.
- Maintains asynchronous behavior while resembling synchronous code flow.
*/

// Run both to see difference
pipelineWithCallbacks();
pipelineAsyncAwait();

// Export for testing
if (typeof module !== 'undefined') module.exports = { pipelineWithCallbacks, pipelineAsyncAwait };
