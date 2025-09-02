//home page java script

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".hero .slides");
  const images = slides.querySelectorAll("img");
  let index = 0;

  function showSlide() {
    index = (index + 1) % images.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(showSlide, 3000); // change every 3s
});

//cart page  java script

// function addToCart(name, price, img) {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push({ name, price, img });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert(name + " added to cart!");
//   }

function addToCart(name, price, img) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists in cart
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if exists
    } else {
        cart.push({ name, price, img, quantity: 1 }); // Add new item with quantity 1
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

// Function to increment quantity
function incrementItem(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

// Function to decrement quantity
function decrementItem(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            // Remove item if quantity is 1 and decrement is pressed
            cart.splice(itemIndex, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

function toggleMenu() {
      document.querySelector('.dropdown').classList.toggle('show');
    }

    // Close dropdown if clicked outside
    window.addEventListener('click', function(e) {
      if (!e.target.matches('.dropdown-btn')) {
        document.querySelectorAll('.dropdown').forEach(drop => {
          drop.classList.remove('show');
        });
      }
    });

// // Function to display cart (example)
// function displayCart() {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.forEach(item => {
//         console.log(item.name, item.price, item.quantity);
//         // Here you can update your HTML dynamically to show increment/decrement buttons
//     });
// }
