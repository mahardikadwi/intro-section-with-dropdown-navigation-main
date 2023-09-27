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
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcons = document.getElementById('menuIcons');

let isOpen = false;

hamburgerBtn.addEventListener('click', () => {
  if (isOpen) {
    mobileNav.classList.remove('translate-x-0');
    mobileNav.classList.add('translate-x-full');
    menuIcons.src = 'images/icon-menu.svg';
  } else {
    mobileNav.classList.remove('translate-x-full');
    mobileNav.classList.add('translate-x-0');
    menuIcons.src = 'images/icon-close-menu.svg';
  }
  isOpen = !isOpen;
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


