const prevButton = document.getElementById('slider-button-prev');
const nextButton = document.getElementById('slider-button-next');
const sliderWrapper = document.getElementById('slider-wrapper');

function changeSlide(direction=1){
    let activeSlide = document.querySelector('.hero-slide.translate-x-0');
    let nextSlide = document.querySelector('.hero-slide.translate-x-full');
    let previousSlide = document.querySelector('.hero-slide.-translate-x-full');
    
    const [incomingSlide,hiddenSlide] = direction === 1 ? [nextSlide,previousSlide] : [previousSlide,nextSlide];

    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add(`${(direction === 1 ? '-' : '')}translate-x-full`,'invisible','opacity-0');

    hiddenSlide.classList.remove(`${(direction === 1 ? '-' : '')}translate-x-full`);
    hiddenSlide.classList.add(`${(direction === -1 ? '-' : '')}translate-x-full`);

    incomingSlide.classList.remove(`${(direction === -1 ? '-' : '')}translate-x-full`,'invisible','opacity-0');
    incomingSlide.classList.add('translate-x-0');
}

prevButton.addEventListener('click',()=>{changeSlide(-1)});
nextButton.addEventListener('click',()=>{changeSlide(1)});