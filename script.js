function myFunction() {
  const nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// Image gallery functionality
function changeImage(src) {
  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  mainImage.src = src;
  thumbnails.forEach(thumb => {
    thumb.classList.remove('active');
    if (thumb.querySelector('img').src === src) {
      thumb.classList.add('active');
    }
  });
}

// Quantity selector
function incrementQty() {
  const qty = document.getElementById('quantity');
  if (qty.value < 10) qty.value = parseInt(qty.value) + 1;
}

function decrementQty() {
  const qty = document.getElementById('quantity');
  if (qty.value > 1) qty.value = parseInt(qty.value) - 1;
}

// Tab functionality
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    
    // Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Update active tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(el => {
        if (el) el.textContent = count;
    });
}

// Initialize cart count when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

function addToCartFromProduct() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const quantity = parseInt(document.getElementById('quantity').value);
    
    // Get product details from the page
    const product = {
        id: 1, // You might want to make this dynamic based on the product
        name: document.querySelector('.product-info h1').textContent,
        price: document.querySelector('.current-price').textContent,
        image: document.querySelector('.main-image-container img').src,
        quantity: quantity
    };
    
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push(product);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}
