document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartTotal = document.getElementById("cart-total");
    const cartItems = document.getElementById("cart-items");
    const products = [
        {
            name: "Camiseta de Equipo",
            price: 19.99,
            image: "imagen1.jpg"
        },
        // Agrega más productos aquí
    ];
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productIndex = button.getAttribute("data-product-index");
            const product = products[productIndex];
            cart.push(product);
            updateCartDisplay();
        });
    });

    function updateCartDisplay() {
        cartItems.innerHTML = "";
        cart.forEach((product, index) => {
            const cartItem = document.createElement("li");
            cartItem.innerHTML = `
                ${product.name} - $${product.price}
                <button class="btn btn-danger remove-from-cart" data-product-index="${index}">Quitar</button>
            `;
            cartItems.appendChild(cartItem);
        });

        const total = cart.reduce((acc, item) => acc + item.price, 0);
        cartTotal.textContent = total.toFixed(2);

        const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
        removeFromCartButtons.forEach(button => {
            button.addEventListener("click", () => {
                const productIndex = button.getAttribute("data-product-index");
                cart.splice(productIndex, 1);
                updateCartDisplay();
            });
        });
    }
});