// fade in-out 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.toggle('show', entry.isIntersecting);
        } else {
            entry.target.classList.toggle('show', entry.isIntersecting);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function animateCount(element, current, target, duration) {
    let start = current;
    const step = target / (duration / 16); // 16ms for smooth animation

    function updateCount() {
        start += step;
        element.textContent = Math.floor(start);

        if (start < target) {
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(updateCount);
}

//---------------------------------------------------------------------

// nav link color
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        rootMargin: '-50px 0px -49px 0px', 
        threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const targetId = entry.target.getAttribute('id');
            const correspondingLink = document.querySelector(`[data-target="${targetId}"]`);

            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                correspondingLink.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe each section
    document.querySelectorAll('.section').forEach((section) => {
        observer.observe(section);
    });
});

//---------------------------------------------------------------------

// mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    menuIcon.addEventListener('click', function () {
        mobileNav.classList.toggle('show');
    });
});
