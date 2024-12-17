// Function to set cookie with expiration date
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  // Function to get cookie value by name
  function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }
  
  // Function to check if the banner has been displayed less than 10 times today
  function canDisplayBanner() {
    const cookieValue = parseInt(getCookie('bannerDisplayCount')) || 0;
    const today = new Date();
    const lastDisplayed = new Date(parseInt(getCookie('lastDisplayed')) || 0);
    const displayLimit = 7;
  
    if (
      today.toDateString() !== lastDisplayed.toDateString() ||
      cookieValue < displayLimit
    ) {
      setCookie('lastDisplayed', today.getTime(), 1); // Set the last displayed date to today
      setCookie('bannerDisplayCount', cookieValue + 1, 1); // Increment display count
      return true; // Banner can be displayed
    }
    return false; // Banner display limit reached for today
  }
  
  // Function to update countdown
  function updateCountdown() {
    // Set the date for the countdown (replace 'endDate' with your desired end date)
    const endDate = new Date('2025-01-08').getTime(); // Example date (year, month - 1, day)
    
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining
    const distance = endDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the countdown in the banner
    document.getElementById('demo').innerHTML = days + 'j ' + hours + 'h ' + minutes + 'm ';
    
    // Update the countdown every 1 second
    setTimeout(updateCountdown, 1000);
  }
  
  // Function to start countdown when the banner is displayed
  function startCountdown() {
    updateCountdown();
  }
  
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
  banner.style.zIndex = '1000'; // Adjust as needed
  banner.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Optional: Add shadow
  
  // Find the body element and add the banner to the top
  const body = document.querySelector('body');
  if (body) {
    body.insertBefore(banner, body.firstChild);
  }
  
  // Function to move content based on banner height
  function moveContentAccordingToBanner() {
    const menuBar = document.querySelector('.navbar'); // Replace with your menu class
    if (menuBar) {
      const bannerHeight = banner.offsetHeight; // Get the height of the banner
      menuBar.style.marginTop = `${bannerHeight}px`; // Set margin top to banner's height
      body.style.marginTop = `${bannerHeight}px`; // Set margin top to banner's height
      const drawerToggler = document.querySelector('.drawer-toggler');
      if (drawerToggler) {
        drawerToggler.style.marginTop = `${bannerHeight}px`; // Set margin top to banner's height for drawer toggler if available
      }
      menuBar.style.zIndex = '999'; // Set a z-index lower than the banner
    }
  }
  
  // Check if the banner can be displayed and move content accordingly
  if (canDisplayBanner()) {
    moveContentAccordingToBanner();
    startCountdown();
  }
  
