const currentPath = window.location.pathname;

// Get all menu links
const menuLinks = document.querySelectorAll('.header__menu a');

// Loop through links and add 'active' class to the matching one
menuLinks.forEach(link => {
    // Get the href value from the link
    const linkPath = link.getAttribute('href');

    // Check if the current page path matches the link's href
    if (currentPath === linkPath ||
        // Also check for index.html specifically
        (currentPath === '/' && linkPath === '/index.html')) {
        link.querySelector('li').classList.add('active');    }
});