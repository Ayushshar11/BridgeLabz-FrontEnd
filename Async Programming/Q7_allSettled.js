// Q7 – The Lazy Loader: Promise.allSettled()

function loadProfile() { return new Promise((resolve, reject) => setTimeout(() => {
  Math.random() < 0.2 ? reject('Profile failed') : resolve('Profile Loaded'); }, 2000)); }

function loadPosts() { return new Promise((resolve, reject) => setTimeout(() => {
  Math.random() < 0.2 ? reject('Posts failed') : resolve('Posts Loaded'); }, 1500)); }

function loadMessages() { return new Promise((resolve, reject) => setTimeout(() => {
  Math.random() < 0.2 ? reject('Messages failed') : resolve('Messages Loaded'); }, 1000)); }

async function loadAll() {
  const start = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const timeTaken = Date.now() - start;
  results.forEach((r, i) => {
    console.log(`Module ${i+1}:`, r.status, r.status === 'fulfilled' ? r.value : r.reason);
  });
  console.log('Total time (ms):', timeTaken);
  return { results, timeTaken };
}

loadAll().catch(err => console.error('Unexpected error:', err));

// Export for testing
if (typeof module !== 'undefined') module.exports = { loadProfile, loadPosts, loadMessages, loadAll };
