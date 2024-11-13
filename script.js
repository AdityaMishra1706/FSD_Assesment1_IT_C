// Price per unit of the product
const pricePerUnit = 15;

// Function to update the total price based on quantity
function updateTotalPrice() {
    const quantity = document.getElementById("quantity").value;
    const totalPrice = pricePerUnit * quantity;
    document.getElementById("totalPrice").innerText = "Rs. " + totalPrice;
}

// Function to handle the Buy Now button click
function buyNow() {
    const quantity = document.getElementById("quantity").value;
    const totalPrice = pricePerUnit * quantity;
    alert(`You added ${quantity} item(s) to your cart for Rs. ${totalPrice}`);
}
