// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Fetch product data from Fake Store API and log Title, Price and Image URL.
// Note: In Node.js (older versions) fetch may not be available. Run in browser or Node 18+.

const API_URL = 'https://fakestoreapi.com/products';

// Using async/await and try/catch
async function fetchProducts() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Network response not ok');
    const products = await res.json();
    products.forEach(p => {
      console.log('Product:', p.title);
      console.log('Price: $' + p.price);
      console.log('Image:', p.image);
      console.log('---');
    });
    return products;
  } catch (err) {
    console.error('Failed to load products. Please try again.');
    console.error(err.message);
    throw err;
  }
}

// Optional: create HTML product cards (bonus). This code runs in browser environment.
function createProductCards(products) {
  if (typeof document === 'undefined') return;
  const container = document.createElement('div');
  container.id = 'product-container';
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(220px, 1fr))';
  container.style.gap = '12px';
  products.forEach(p => {
    const card = document.createElement('div');
    card.style.border = '1px solid #ddd';
    card.style.padding = '8px';
    card.style.borderRadius = '8px';
    const img = document.createElement('img');
    img.src = p.image; img.alt = p.title; img.style.maxWidth = '100%'; img.style.height = '150px'; img.style.objectFit = 'contain';
    const title = document.createElement('h4'); title.textContent = p.title; title.style.fontSize = '14px';
    const price = document.createElement('p'); price.textContent = '$' + p.price;
    card.appendChild(img); card.appendChild(title); card.appendChild(price);
    container.appendChild(card);
  });
  document.body.appendChild(container);
}

// Auto-run in browser/Node if desired
if (typeof window !== 'undefined') {
  fetchProducts().then(createProductCards).catch(()=>{});
}

// Export for testing
if (typeof module !== 'undefined') module.exports = { fetchProducts, createProductCards };
