document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Close the menu if a link is clicked (optional)
    document.querySelectorAll('.menu-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });

    // Close the menu if user clicks outside of it (optional)
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !event.target.matches('.menu-button')) {
            menu.classList.remove('active');
        }
    });
});
