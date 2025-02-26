// Product data array
// Product data array
const products = [
    {
        id: 1,
        name: "Corporate Mug",
        category: "misc",
        price: "$47.00 USD",
        description: "A vessel for all liquids whether they're hot or cold. Receptacle use as a storage for household items.",
        images: {
            primary: "./assets/ULcorporateMug1.png",
            secondary: "./assets/ULcorporateMug2.png"
        }
    },
    {
        id: 2,
        name: "Coffee Table",
        category: "tables",
        price: "$100.00 USD",
        description: "Low surface for the display of aesthetically pleasing objects and publications for amelioration of status.",
        images: {
            primary: "./assets/ULcoffeeTable1.png",
            secondary: "./assets/ULcoffeeTable2.png"
        }
    },
    {
        id: 3,
        name: "Bottle Opener",
        category: "misc",
        price: "$35.00 USD",
        description: "Opening liquid-filled vessels with the sole intention of indulging in their contents.",
        images: {
            primary: "./assets/ULbottleOpener1.png",
            secondary: "./assets/ULbottleOpener2.png"
        }
    },
    {
        id: 4,
        name: "5 Tier Shelving",
        category: "shelving",
        price: "$75.00 USD",
        description: "Vertical storage and display solution for publications, collectables, and audio equipment recordings.",
        images: {
            primary: "./assets/ULfiveTierShelving1.png",
            secondary: "./assets/ULfiveTierShelving2.png"
        }
    },
    {
        id: 5,
        name: "4 Tier Shelving",
        category: "shelving",
        price: "$65.00 USD",
        description: "Vertical storage and display solution for publications, collectables, and sculptural objects.",
        images: {
            primary: "./assets/ULfourTierShelving1.png",
            secondary: "./assets/ULfourTierShelving2.png"
        }
    },
    {
        id: 6,
        name: "Low Coffee Table",
        category: "tables",
        price: "$85.00 USD",
        description: "Low surface for the display of aesthetically pleasing objects and publications for amelioration of status.",
        images: {
            primary: "./assets/ULLowCoffeeTable1.png",
            secondary: "./assets/ULLowCoffeeTable2.png"
        }
    },
    {
        id: 7,
        name: "1 Seater Chair",
        category: "seating",
        price: "$60.00 USD",
        description: "Seating solution for common recreational activities including media consumption via laptop computer.",
        images: {   
            primary: "./assets/ULoneSeaterChair1.png",
            secondary: "./assets/ULoneSeaterChair2.png"
        }
    },
    {
        id: 8,
        name: "Porcelain Corporate Cup",
        category: "misc",
        price: "$20.00 USD",
        description: "A vessel for all liquids whether they're hot or cold. Hand made off the cost of spain.",
        images: {
            primary: "./assets/ULporcelainCorporateCup1.png",
            secondary: "./assets/ULporcelainCorporateCup2.png"
        }
    },
    {
        id: 9,
        name: "Side Table",
        category: "tables",
        price: "$50.00 USD",
        description: "Raised surface to ensure necessary items for domestic enjoyment are within close proximity.",
        images: {
            primary: "./assets/ULsideTableOrange1.png",
            secondary: "./assets/ULsideTableOrange2.png"
                }
    },
    {
        id: 10,
        name: "3 Seater Sofa",
        category: "seating",
        price: "$90.00 USD",
        description: "Multi-purpose seating solution for moments of social connection and occasional lethargy.",
        images: {
            primary: "./assets/ULthreeSeaterSofa1.png",
            secondary: "./assets/ULthreeSeaterSofa2.png"
        }
    },
    {
        id: 11,
        name: "3 Tier Shelving",
        category: "shelving",
        price: "$55.00 USD",
        description: "Vertical storage and display solution for publications, collectables, and sculptural objects.",
        images: {
            primary: "./assets/ULthreeTierShelving1.png",
            secondary: "./assets/ULthreeTierShelving2.png"
        }
    },
    {
        id: 12,
        name: "2 Seater Sofa",
        category: "seating",
        price: "$75.00 USD",
        description: "Multi-purpose seating solution for moments of social connection and occasional lethargy.",
        images: {
            primary: "./assets/ULtwoSeaterSofa1.png",
            secondary: "./assets/ULtwoSeaterSofa2.png"
        }
    },
];

// Function to create a product card
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image-container">
                <img src="${product.images.primary}" alt="${product.name}" class="primary-image">
                <img src="${product.images.secondary}" alt="${product.name} Alternate View" class="secondary-image">
            </div>
            <div class="product-info">
                <div class="product-name">
                    <h3>${product.name}</h3>
                    <h4>${product.price}</h4>
                </div>
                <p>${product.description}</p>
                <div class="product-actions">
                    <a href="product.html" class="view-btn">View Product</a>
                    <button class="cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

// Function to render all products
function renderProducts() {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    // Render all products
    renderProducts();
    updateProductCount();

    // Filter functionality
    const filterOptions = document.querySelectorAll('.filter-option input');
    const productCards = document.querySelectorAll('.product-card');

    filterOptions.forEach(option => {
        option.addEventListener('change', () => {
            // If "All Products" is checked, uncheck others
            if (option.value === 'all' && option.checked) {
                filterOptions.forEach(opt => {
                    if (opt.value !== 'all') opt.checked = false;
                });
            }
            // If another option is checked, uncheck "All Products"
            else if (option.value !== 'all' && option.checked) {
                const allOption = document.querySelector('.filter-option input[value="all"]');
                allOption.checked = false;
            }

            // Get all selected categories
            const selectedCategories = Array.from(filterOptions)
                .filter(opt => opt.checked)
                .map(opt => opt.value);

            // If nothing is selected or "all" is selected, show all products
            const showAll = selectedCategories.length === 0 || selectedCategories.includes('all');

            // Filter products
            productCards.forEach(product => {
                const category = product.getAttribute('data-category');
                if (showAll || selectedCategories.includes(category)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });

            updateProductCount();
            updateActiveFilters();
        });
    });

    // Sort functionality
    const sortSelect = document.getElementById('sort');
    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        const productsArray = Array.from(document.querySelectorAll('.product-card'));
        
        productsArray.sort((a, b) => {
            const aPrice = parseFloat(a.querySelector('h4').textContent.replace(/[^0-9.]/g, ''));
            const bPrice = parseFloat(b.querySelector('h4').textContent.replace(/[^0-9.]/g, ''));
            const aName = a.querySelector('h3').textContent;
            const bName = b.querySelector('h3').textContent;
            
            switch(sortValue) {
                case 'price-low':
                    return aPrice - bPrice;
                case 'price-high':
                    return bPrice - aPrice;
                case 'name':
                    return aName.localeCompare(bName);
                default: // featured
                    return 0;
            }
        });
        
        const productsGrid = document.querySelector('.products-grid');
        productsArray.forEach(card => productsGrid.appendChild(card));
    });

    // Dropdown functionality
    const filterBtn = document.querySelector('.filter-btn');
    const filterMenu = document.querySelector('.filter-menu');

    // Toggle dropdown on button click
    filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown();
    });

    // Toggle dropdown on button keydown
    filterBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!filterBtn.contains(e.target) && !filterMenu.contains(e.target)) {
            closeDropdown();
        }
    });

    function toggleDropdown() {
        const isExpanded = filterBtn.getAttribute('aria-expanded') === 'true';
        filterBtn.setAttribute('aria-expanded', !isExpanded);
        filterMenu.style.display = isExpanded ? 'none' : 'block';
    }

    function closeDropdown() {
        filterBtn.setAttribute('aria-expanded', 'false');
        filterMenu.style.display = 'none';
    }
});

// Function to update the product count
function updateProductCount() {
    const visibleProducts = document.querySelectorAll('.product-card[style*="display: block"], .product-card:not([style])').length;
    document.getElementById('product-count').textContent = visibleProducts;
}

function updateActiveFilters() {
    const activeFiltersContainer = document.querySelector('.active-filters');
    const selectedFilters = Array.from(document.querySelectorAll('.filter-option input:checked'))
        .filter(input => input.value !== 'all')
        .map(input => input.value);

    let filtersHTML = '';
    
    if (selectedFilters.length > 0) {
        selectedFilters.forEach(filter => {
            filtersHTML += `
                <div class="filter-tag">
                    ${filter.charAt(0).toUpperCase() + filter.slice(1)}
                    <button onclick="removeFilter('${filter}')" aria-label="Remove ${filter} filter">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        });
        filtersHTML += `
            <button class="clear-all-filters" onclick="clearAllFilters()">
                Clear all
            </button>
        `;
    }
    
    activeFiltersContainer.innerHTML = filtersHTML;
}

function removeFilter(filterValue) {
    const filterInput = document.querySelector(`.filter-option input[value="${filterValue}"]`);
    filterInput.checked = false;
    filterInput.dispatchEvent(new Event('change'));
}

function clearAllFilters() {
    const allOption = document.querySelector('.filter-option input[value="all"]');
    allOption.checked = true;
    allOption.dispatchEvent(new Event('change'));
}

// Update the createProductCard function
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image-container">
                <img src="${product.images.primary}" alt="${product.name}" class="primary-image">
                <img src="${product.images.secondary}" alt="${product.name} Alternate View" class="secondary-image">
            </div>
            <div class="product-info">
                <div class="product-name">
                    <h3>${product.name}</h3>
                    <h4>${product.price}</h4>
                </div>
                <p>${product.description}</p>
                <div class="product-actions">
                    <a href="product.html" class="view-btn">View Product</a>
                    <button class="cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

// Cart functionality
function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images.primary,
                quantity: 1
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(el => {
        if (el) el.textContent = count;
    });
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});