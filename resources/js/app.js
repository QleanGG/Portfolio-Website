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

// 
const changeProjectNum = () => {
    projectNum = document.getElementById("project-num");
    projectNum.innerHTML = "250";
}

const changeExpNum = () => {
    expNum = document.getElementById("exp-num");
    expNum.innerHTML = "12";
}

changeBtn = document.getElementById("change-btn");
changeBtn.addEventListener('click',() => {
    changeProjectNum();
    changeExpNum();
})