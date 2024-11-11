document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.scroll-link');
  
    for (const link of scrollLinks) {
        link.addEventListener('click', scrollToSection);
    }
  
    function scrollToSection(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
    
        if (targetSection) {
            targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            })
        }
    }
})

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

function showSlides(n){
    const slides = document.getElementsByClassName('slide')
    const lines = document.getElementsByClassName('line')

    if(n > slides.length){
        slideIndex = 1
    }

    if(n < 1){
        slideIndex = slides.length
    }

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }

    for(let i = 0; i < lines.length; i++){
        lines[i].classList.remove('active')
    }

    slides[slideIndex-1].style.display = 'flex'
    lines[slideIndex-1].classList.add('active')
}
