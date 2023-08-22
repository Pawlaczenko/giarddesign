const galleryWindow = document.getElementById('gallery-window');
const closeButtonGallery = document.getElementById('gallery-button-close');
const nextButtonGallery = document.getElementById('gallery-button-next');
const prevButtonGallery = document.getElementById('gallery-button-previous');
const galleryBackdrop = document.getElementById('gallery-backdrop');
const galleryLoader = document.getElementById('gallery-loader');

let currentPhotoIndex = 0;
let galleryOpen = false;
const PHOTOS_COUNT = GALLERY_PHOTOS.length;

const getPhotoPath = path => `./img/gallery/${path}`;

const openGallery = () => {
    galleryWindow.setAttribute('aria-hidden',false);
    galleryOpen = true;
    document.querySelector('body').classList.add('overflow-hidden'); //disable scroll under gallery
    const photo = GALLERY_PHOTOS[currentPhotoIndex];
    let activeSlide = galleryWindow.querySelector('.gallery-slide.translate-x-0');
    const imageElement = activeSlide.querySelector('img');
    imageElement.setAttribute('src',getPhotoPath(photo.path));

    imageElement.onload = () => {
        galleryWindow.classList.remove('invisible','opacity-0');
    }
}

const closeGallery = () => {
    galleryOpen = false;
    document.querySelector('body').classList.remove('overflow-hidden');
    galleryWindow.classList.add('invisible','opacity-0');
    currentPhotoIndex = 0;
    galleryWindow.setAttribute('aria-hidden',true);
}

const changePhoto = (direction) => {
    currentPhotoIndex = (currentPhotoIndex + direction + PHOTOS_COUNT) % PHOTOS_COUNT;
    const photo = GALLERY_PHOTOS[currentPhotoIndex];

    let activeSlide = document.querySelector('.gallery-slide.translate-x-0');
    let nextSlide = document.querySelector('.gallery-slide.translate-x-screen');
    let previousSlide = document.querySelector('.gallery-slide.-translate-x-screen');
    galleryLoader.classList.remove('invisible');

    const [incomingPhoto,hiddenPhoto] = direction === 1 ? [nextSlide,previousSlide] : [previousSlide,nextSlide];
    const imageElement = incomingPhoto.querySelector('img');
    imageElement.setAttribute('src',getPhotoPath(photo.path));
    imageElement.setAttribute('alt',photo.alt);
    
    //hide currently shown photo
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add(`${(direction === 1 ? '-' : '')}translate-x-screen`,'opacity-0');

    //swap hidden photo to another side
    hiddenPhoto.classList.remove(`${(direction === 1 ? '-' : '')}translate-x-screen`);
    hiddenPhoto.classList.add(`${(direction === -1 ? '-' : '')}translate-x-screen`);
    //when new image is ready, show it
    imageElement.onload = () => {
        incomingPhoto.classList.remove(`${(direction === -1 ? '-' : '')}translate-x-screen`,'opacity-0');
        incomingPhoto.classList.add('translate-x-0');
        galleryLoader.classList.add('invisible');
    }
}

const nextPhoto = () => {changePhoto(1)}
const prevPhoto = () => {changePhoto(-1)}

document.addEventListener('click',(e)=>{
    const target = e.target.closest('.gallery-item');
    if(target) {
        const clickedPhotoIndex = parseInt(target.dataset.photoIndex);
        currentPhotoIndex = clickedPhotoIndex;
        openGallery();
    }
});

nextButtonGallery.addEventListener('click',nextPhoto)
prevButtonGallery.addEventListener('click',prevPhoto)
galleryBackdrop.addEventListener('click',closeGallery);
closeButtonGallery.addEventListener('click',closeGallery);

document.addEventListener('keydown',(e) => {
    if(galleryOpen){
        switch(e.key){
            case 'ArrowLeft':
                prevPhoto();
                break;
            case 'ArrowRight':
                nextPhoto();
                break;
            case 'Escape':
                closeGallery();
                break;
        }
    }
});