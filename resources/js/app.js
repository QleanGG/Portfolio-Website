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