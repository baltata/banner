// Create the banner element
const banner = document.createElement('a');
banner.href = 'https://galilee.ac/local/membership/plan.php';
banner.classList.add('countdown-banner');

// Create the content for the banner
const bannerContent = document.createElement('p');
bannerContent.innerHTML = '🎄 Plus que <span id="demo"></span> pour profiter des <span id="discountText">70% de réduction!</span> 🎁';

// Append the content to the banner element
banner.appendChild(bannerContent);

// Find the body element and add the banner to the top
const body = document.querySelector('body');
if (body) {
  body.insertBefore(banner, body.firstChild);
}
