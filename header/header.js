
    // Toggle active class on nav links when clicked
    document.addEventListener('DOMContentLoaded', function () {
        const nav = document.querySelector('.site-nav');
        if (!nav) return;
        const links = Array.from(nav.querySelectorAll('a'));
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                if (this.getAttribute('href') === '#') e.preventDefault();
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });
   