const observer = new IntersectionObserver ((entries) => {
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
let projectCount = 2; // projects

window.addEventListener('load', function() {
    animateCount(expElement, 0,  expCount, 800); // 1000ms (1 seconds) animation duration
    animateCount(projectElement, 0, projectCount, 800);
});

// Update button event listener
document.getElementById('change-btn').addEventListener('click', function() {
    // Set new target numbers
    const newExpTarget = 12;
    const newProjectTarget = 250;

    // Animate the numbers from their current values to the new targets
    animateCount(expElement, expCount, newExpTarget, 500); // 500ms animation duration
    animateCount(projectElement, projectCount, newProjectTarget, 500);
});
