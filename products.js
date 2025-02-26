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
                    <button class="cart-btn">Add to Cart</button>
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

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter products
            productCards.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
}); 