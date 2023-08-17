const prevButton = document.getElementById('slider-button-prev');
const nextButton = document.getElementById('slider-button-next');
const sliderWrapper = document.getElementById('slider-wrapper');

function nextSlide(){
    let activeSlide = document.querySelector('.slide.translate-x-0');
    let nextSlide = activeSlide.nextElementSibling;

    if(nextSlide && nextSlide.classList.contains('slide')){
        console.log(nextSlide);
        console.log(nextSlide.scrollHeight);

        activeSlide.classList.remove('translate-x-0');
        activeSlide.classList.add('-translate-x-full');
        
        nextSlide.classList.remove('translate-x-full');
        nextSlide.classList.add('translate-x-0');
    }
}

function previousSlide(){
    let activeSlide = document.querySelector('.slide.translate-x-0');
    let previousSlide = activeSlide.previousElementSibling;

    if(previousSlide) {
        sliderWrapper.clientHeight = previousSlide.clientHeight;
        activeSlide.classList.remove('translate-x-0');
        activeSlide.classList.add('translate-x-full');
        
        previousSlide.classList.remove('-translate-x-full');
        previousSlide.classList.add('translate-x-0');
    }
}

prevButton.addEventListener('click',previousSlide);
nextButton.addEventListener('click',nextSlide);