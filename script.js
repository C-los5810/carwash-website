// Select all tabs and content sections
const navLinks = document.querySelectorAll('.nav-link');
const contents = document.querySelectorAll('.content');

// Add click event listeners to all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        // Remove active class from all links and contents
        navLinks.forEach(nav => nav.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked link
        link.classList.add('active');

        // Show the associated content
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    });
});
