const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.classList.remove('active'); // Add this line
  });
});