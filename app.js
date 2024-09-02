const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

function scrollToTop(){
    window.scrollTo(0,0);
}

const scrollToBottom = (footer) => {
    const element = document.getElementById(footer);
    elemeny.scrollTop = element.scrollHeight;
}
