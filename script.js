// JavaScript code for handling the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

const cart = {
    items: [],
    addProduct: function(productName, productPrice) {
        this.items.push({ name: productName, price: productPrice });
        this.updateCart();
    },
    updateCart: function() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';

        this.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.price}`;
            cartItems.appendChild(listItem);
        });
    }
};

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const product = event.target.closest('.product');
    const productName = product.querySelector('h2').textContent;
    const productPrice = product.querySelector('.price').textContent;

    // Add the product to the cart
    let urcart=cart.addProduct(productName, productPrice);
    alert("Do you want to add this product to your cart ??");

}




// JavaScript code for handling the "Cart" button and cart content
const showCartButton = document.getElementById('show-cart');
const closeCartButton = document.getElementById('close-cart');
const cartContainer = document.getElementById('cart-container');
const cartItemsList = document.getElementById('cart-items');

// Show cart content when the "Cart" button is clicked
showCartButton.addEventListener('click', () => {
   cartContainer.style.display = 'block';
});

// Close cart when the close button is clicked
closeCartButton.addEventListener('click', () => {
   cartContainer.style.display = 'none';
});

// Your existing cart logic for adding products
// ...

// Update the cart content in the cart container
function updateCart() {
   cartItemsList.innerHTML = '';

   cart.items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - ${item.price}`;
      cartItemsList.appendChild(listItem);
   });
}
// Get a reference to the Products link and the product table
const productsLink = document.querySelector('nav ul li:nth-child(1) a'); // 2nd <li> for Products
const productTable = document.getElementById('product-table');

// Add a click event listener to the Products link
productsLink.addEventListener('click', () => {
    // Toggle the visibility of the product table
    productTable.style.display = productTable.style.display === 'none' ? 'block' : 'none';
});
