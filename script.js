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
