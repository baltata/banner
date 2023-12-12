// Create the banner element
const banner = document.createElement('a');
banner.href = 'https://galilee.ac/local/membership/plan.php';
banner.classList.add('countdown-banner');
banner.innerHTML = `
  <p>🎄 Plus que <span id="demo"></span> pour profiter des <span id="discountText">70% de réduction!</span> 🎁</p>
`;

// Style the banner
banner.style.position = 'fixed';
banner.style.top = '0';
banner.style.left = '0';
banner.style.width = '100%';
banner.style.backgroundColor = '#fff'; // Change as needed
banner.style.zIndex = '1000'; // Adjust as needed
banner.style.textAlign = 'center';
banner.style.padding = '10px';
banner.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Optional: Add shadow

// Find the body element and add the banner to the top
const body = document.querySelector('body');
if (body) {
  body.insertBefore(banner, body.firstChild);
}

// Adjust the z-index of the menu bar or conflicting elements
const menuBar = document.querySelector('.navbar'); // Replace with your menu class
if (menuBar) {
  menuBar.style.zIndex = '999'; // Set a z-index lower than the banner
}
