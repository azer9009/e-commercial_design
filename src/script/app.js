document.addEventListener('DOMContentLoaded', function() {
const addToCartButtons = document.querySelectorAll('.hover-buttons button:first-child');
const cartCountElement = document.getElementById('cart-count');

  let cartCount = 0;

  addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
  cartCount++;
  cartCountElement.textContent = cartCount;
    });
  });
});

window.onscroll = function() {
  var navbar = document.querySelector('.navbar');
  if (window.pageYOffset > 0) {
    navbar.classList.add('fixed-top');
  } else {
    navbar.classList.remove('fixed-top');
  }
};