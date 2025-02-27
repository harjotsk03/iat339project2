document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkout-form');
    const successMessage = document.getElementById('success-message');
    
    // Update cart count
    updateCartCount();

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple form validation
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        // Basic validation
        if (!validateCardNumber(cardNumber)) {
            alert('Please enter a valid card number');
            return;
        }

        if (!validateExpiryDate(expiryDate)) {
            alert('Please enter a valid expiry date (MM/YY)');
            return;
        }

        if (!validateCVV(cvv)) {
            alert('Please enter a valid CVV');
            return;
        }

        // Show success message
        successMessage.classList.add('show');
        
        // Clear cart after 2 seconds and redirect
        setTimeout(() => {
            localStorage.setItem('cart', JSON.stringify([]));
            updateCartCount();
            window.location.href = './products.html';
        }, 2000);
    });
});

// Validation functions
function validateCardNumber(cardNumber) {
    return cardNumber.replace(/\s/g, '').length === 16;
}

function validateExpiryDate(expiryDate) {
    const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!regex.test(expiryDate)) return false;
    
    const [month, year] = expiryDate.split('/');
    const now = new Date();
    const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
    
    return expiry > now;
}

function validateCVV(cvv) {
    return /^[0-9]{3,4}$/.test(cvv);
}

// Format card number as user types
document.getElementById('cardNumber').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\s/g, '');
    value = value.replace(/\D/g, '');
    value = value.replace(/(.{4})/g, '$1 ').trim();
    e.target.value = value.substring(0, 19);
});

// Format expiry date as user types
document.getElementById('expiryDate').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2);
    }
    e.target.value = value.substring(0, 5);
});

// Limit CVV to 3-4 digits
document.getElementById('cvv').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
});

function updateCheckoutSummary() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const subtotal = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + (price * item.quantity);
    }, 0);

    document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `$${subtotal.toFixed(2)}`;
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', updateCheckoutSummary);