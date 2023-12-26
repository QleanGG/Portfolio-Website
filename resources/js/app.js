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

// Get the elements and target numbers
const expElement = document.querySelector('#exp-num');
const projectElement = document.querySelector('#project-num');
let expCount = 1; // years of experience
let projectCount = 10; // projects

window.addEventListener('load', function () {
    animateCount(expElement, 0, expCount, 1800); 
    animateCount(projectElement, 0, projectCount, 1800);
});

// Update button event listener
document.getElementById('change-btn').addEventListener('click', function () {
    // Set new target numbers
    const newExpTarget = 12;
    const newProjectTarget = 250;

    // Animate the numbers from their current values to the new targets
    animateCount(expElement, expCount, newExpTarget, 500); // 500ms animation duration
    animateCount(projectElement, projectCount, newProjectTarget, 500);
});

if (window.innerWidth > 768) {
    const projectImages = document.querySelectorAll('.project-image');

    projectImages.forEach(image => {
        const img = image.querySelector('img');
        const learnMoreButton = image.querySelector('.learn-more-button');

        image.addEventListener('mouseover', () => {
            img.style.filter = 'brightness(70%)'; // Apply dim effect
            learnMoreButton.style.display = 'block'; // Show the button
        });

        image.addEventListener('mouseout', () => {
            img.style.filter = 'brightness(100%)'; // Remove dim effect
            learnMoreButton.style.display = 'none'; // Hide the button
        });
    });
}
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


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    menuIcon.addEventListener('click', function () {
        mobileNav.classList.toggle('show');
    });
});
