let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    changeSlide('next');
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide('prev');
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');

    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % totalSlides;
    } else if (direction === 'prev') {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }

    slides[currentSlide].classList.add('active');
}
