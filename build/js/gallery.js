const galleryWindow = document.getElementById('gallery-window');
const closeButtonGallery = document.getElementById('gallery-button-close');
const nextButtonGallery = document.getElementById('gallery-button-next');
const prevButtonGallery = document.getElementById('gallery-button-previous');
const galleryBackdrop = document.getElementById('gallery-backdrop');

let currentPhotoIndex = 0;
let galleryOpen = false;
const PHOTOS_COUNT = GALLERY_PHOTOS.length;

const getPhotoPath = path => `./img/gallery/${path}`;

const openGallery = () => {
    galleryOpen = true;
    document.querySelector('body').classList.add('overflow-hidden');
    const photo = GALLERY_PHOTOS[currentPhotoIndex];
    let activeSlide = galleryWindow.querySelector('.gallery-slide.translate-x-0');
    activeSlide.querySelector('img').setAttribute('src',getPhotoPath(photo.path));

    galleryWindow.classList.remove('invisible','opacity-0');
}

const closeGallery = () => {
    galleryOpen = false;
    document.querySelector('body').classList.remove('overflow-hidden');
    galleryWindow.classList.add('invisible','opacity-0');
    currentPhotoIndex = 0;
}

const changePhoto = (direction) => {
    currentPhotoIndex = (currentPhotoIndex + direction + PHOTOS_COUNT) % PHOTOS_COUNT;
    const photo = GALLERY_PHOTOS[currentPhotoIndex];

    let activeSlide = document.querySelector('.gallery-slide.translate-x-0');
    let nextSlide = document.querySelector('.gallery-slide.translate-x-screen');
    let previousSlide = document.querySelector('.gallery-slide.-translate-x-screen');

    const [incomingPhoto,hiddenPhoto] = direction === 1 ? [nextSlide,previousSlide] : [previousSlide,nextSlide];
    incomingPhoto.querySelector('img').setAttribute('src',getPhotoPath(photo.path));
    incomingPhoto.querySelector('img').setAttribute('alt',photo.alt);

    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add(`${(direction === 1 ? '-' : '')}translate-x-screen`,'opacity-0');

    incomingPhoto.classList.remove(`${(direction === -1 ? '-' : '')}translate-x-screen`,'opacity-0');
    incomingPhoto.classList.add('translate-x-0');

    hiddenPhoto.classList.remove(`${(direction === 1 ? '-' : '')}translate-x-screen`);
    hiddenPhoto.classList.add(`${(direction === -1 ? '-' : '')}translate-x-screen`);
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