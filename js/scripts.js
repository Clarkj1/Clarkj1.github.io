/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // --- THE FIX IS BELOW ---

    // Get all the links in the navigation menu
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
    
    // Get the actual menu element that collapses
    const menuCollapsible = document.getElementById('navbarResponsive');

    // Loop through every link
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            // Check if the hamburger button is visible (meaning we are on mobile)
            const navbarToggler = document.body.querySelector('.navbar-toggler');
            
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                // Use Bootstrap's official API to close the menu cleanly
                // We get the existing instance or create a new one if it doesn't exist
                const bsCollapse = bootstrap.Collapse.getInstance(menuCollapsible) || new bootstrap.Collapse(menuCollapsible, { toggle: false });
                bsCollapse.hide();
            }
        });
    });

});
