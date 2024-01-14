import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/header.css'
import '../styles/utils.css'
import '../styles/main_hero.css'
import '../styles/main_services.css'
import '../styles/main_events.css'
import '../styles/main_partners.css'
import '../styles/about_hero.css'
import '../styles/services_cards.css'
import '../styles/inner_services.css'
import '../styles/contact.css'
import '../styles/footer.css'
import '../styles/test.css'
// import './scripts'


const textElement = document.getElementById('changingText');
const words = ['น่ารื่นรมย์', 'delightful'];
let currentIndex = 0;

function changeText() {
  textElement.style.opacity = 0;
  setTimeout(() => {
    textElement.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
    textElement.style.opacity = 1;
  }, 500); // Delay the text change to match the transition duration
}

setInterval(changeText, 4000); // Change text every 2 seconds


function openTab(tabId,tabIds) {
  // Hide all tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.style.display = 'none';
  });

  // Deactivate all tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // Show the selected tab content
  document.getElementById(tabId).style.display = 'flex';

  // Activate the selected tab
  document.querySelector(`.tab[id="${tabIds}"]`).classList.add('active');
}

// var myButton = document.getElementById('tab2s');
// myButton.addEventListener('click', openTab);



document.addEventListener('DOMContentLoaded', function() {
  // Get the current page filename (e.g., "about.html" or "index.html")
  var currentPage = window.location.pathname.split('/').pop();

  // Remove the ".html" extension if present
  currentPage = currentPage.replace('.html', '');

  // Get the corresponding navigation link element
  var currentNavLink = document.getElementById(currentPage);

  // If the navigation link element exists, add the "active" class
  if (currentNavLink) {
    currentNavLink.classList.add('active');
  }
});
