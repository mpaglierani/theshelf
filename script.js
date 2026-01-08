// script

function loadInclude(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (window.feather) feather.replace(); // refresh icons
    })
    .catch(error => console.error('Error loading include:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  loadInclude('nav-placeholder', 'nav.html');
  loadInclude('footer-placeholder', 'footer.html');
});