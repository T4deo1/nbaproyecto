document.addEventListener("DOMContentLoaded", function() {
    const cart = [];
    const cartTotal = document.getElementById("cart-total");
    const cartItems = document.getElementById("cart-items");
    const paymentForm = document.getElementById("payment-form");
    const paymentDetails = document.getElementById("payment-details");
    const totalProducts = document.getElementById("total-products");
    const price = document.getElementById("price");

    const products = [
    {
        name: "Remera de Steve Nash",
        price: 19.99,
        image: "imagenes/remera.jpeg"
    },
    {
        name: "Remera de la NBA",
        price: 15,
        image: "imagenes/remecorta.jpeg"
    },
    {
        name: "Gorras de la NBA",
        price: 25,
        image: "imagenes/gorras.jpeg"
    },
    {
        name: "Bulls iconic",
        price: 49.99,
        image: "imagenes/pan.jpg"
    },
    ];

    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const product = products[index];
            cart.push(product);
    
            const cartItem = document.createElement("li");
            cartItem.textContent = product.name;
    
            const removeButton = document.createElement("button");
            removeButton.textContent = "Quitar";
            removeButton.className = "btn btn-danger"; 
            removeButton.addEventListener("click", () => {
                removeFromCart(index);
            });
    
            cartItem.appendChild(removeButton);
            cartItems.appendChild(cartItem);
    
            updatePaymentDetails();
        });
    });

    paymentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        paymentForm.style.display = "none";
        paymentDetails.style.display = "block";
    });

    function updatePaymentDetails() {
        const total = calculateTotal(cart);
        cartTotal.textContent = total.toFixed(2);

        totalProducts.textContent = "$" + total.toFixed(2);
        price.textContent = "$" + total.toFixed(2);
    }

    function calculateTotal(cart) {
        return cart.reduce((acc, item) => acc + item.price, 0);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartDisplay();
        updatePaymentDetails();
    }

    function updateCartDisplay() {
        cartItems.innerHTML = "";
        cart.forEach((product, index) => {
            const cartItem = document.createElement("li");
            cartItem.textContent = product.name;
            
            const removeButton = document.createElement("button");
            removeButton.textContent = "Quitar";
            removeButton.className = "btn btn-danger"; 
            removeButton.addEventListener("click", () => {
                removeFromCart(index);
            });

            cartItem.appendChild(removeButton);
            cartItems.appendChild(cartItem);
        });
    }
});
window.addEventListener("load", ()=>{
    const currentDate=new Date();
    document.getElementById("currentyear").innerText=currentDate.getFullYear()
    })


