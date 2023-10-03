// dropdown
const dropdownLinks = document.querySelectorAll('[data-dropdown]');
// Function to hide all dropdowns
function hideAllDropdowns() {
    dropdownLinks.forEach((link) => {
        const dropdownId = link.getAttribute('data-dropdown');
        const dropdown = document.getElementById(dropdownId);
        dropdown.style.opacity = '0';
        dropdown.style.pointerEvents = 'none';
    });
}

// Add event listeners to toggle the opacity of the dropdowns on hover
dropdownLinks.forEach((link) => {
    const dropdownId = link.getAttribute('data-dropdown');
    const dropdown = document.getElementById(dropdownId);

    // Add a mouseenter event listener to show the dropdown
    link.addEventListener('mouseenter', () => {
        hideAllDropdowns(); // Hide all open dropdowns
        dropdown.style.opacity = '1';
        dropdown.style.pointerEvents = 'auto';
    });

    // Add a mouseleave event listener to hide the dropdown
    dropdown.addEventListener('mouseleave', () => {
        dropdown.style.opacity = '0';
        dropdown.style.pointerEvents = 'none';
    });
});

// Add a mouseleave event listener to the parent container to hide all dropdowns
const navigation = document.querySelector('.hidden');
navigation.addEventListener('mouseleave', () => {
    hideAllDropdowns();
});

// mobile nav
const hamburgerBtn = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-menu');
const mobileNavIcon = document.getElementById('icon-menu');

let isOpen = false;

// Function to close the mobile menu
function closeMobileMenu() {
  mobileNav.classList.remove('translate-x-0');
  mobileNav.classList.add('translate-x-full');
  hamburgerBtn.classList.remove('fixed');
  mobileNavIcon.src = 'images/icon-menu.svg';
  isOpen = false;
}

function openMobileMenu() {
  mobileNav.classList.remove('translate-x-full');
    mobileNav.classList.add('translate-x-0');
    hamburgerBtn.classList.add('fixed');
    mobileNavIcon.src = 'images/icon-close-menu.svg';
    isOpen = true;
}

// Event listener for the hamburger button click
hamburgerBtn.addEventListener('click', () => {
  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

// Event listener for window resize
window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;
  // Check if the window width is greater than or equal to the desktop threshold (e.g., 768 pixels)
  if (windowWidth >= 768 && isOpen) {
    closeMobileMenu();
  }
});

// mobile nav dropdown
const mobileLinks = document.querySelectorAll('[data-mobile]');
mobileLinks.forEach((links) => {
  const mobileNavId = links.getAttribute('data-mobile');
  const dropdown = document.getElementById(mobileNavId);

  links.addEventListener('click', () => {
    dropdown.style.maxHeight = dropdown.style.maxHeight ? null : `${dropdown.scrollHeight}px`;
  })
});


