const galleryGrid = document.getElementById("gallery-grid");
const morePhotosButton = document.getElementById("more-photos-button");
const hidingGradient = document.getElementById("hiding-gradient");
const PHOTOS_PER_PAGE = 5;
const PHOTOS_ON_LOAD = 9;
const fragment = document.createDocumentFragment();
let lastPhotoAdded = 0;

const GALLERY_PHOTOS = [
    { path: 'gallery-1.webp', alt: 'Ogród ze schodami'},
    { path: 'gallery-2.webp', alt: 'Ogród przy basenie'},
    { path: 'gallery-3.webp', alt: 'Ogród tunelowy z różami'},
    { path: 'gallery-4.webp', alt: 'Ryba pływająca w stawie z liliami'},
    { path: 'gallery-5.webp', alt: 'Droga kamienna'},
    { path: 'gallery-6.webp', alt: 'Ogród'},
    { path: 'gallery-7.webp', alt: 'Ogród'},
    { path: 'gallery-8.webp', alt: 'Ogród'},
    { path: 'gallery-9.webp', alt: 'Ogród'},
    { path: 'gallery-10.webp', alt: 'Ogród'},
    { path: 'gallery-11.webp', alt: 'Ogród'},
    { path: 'gallery-12.webp', alt: 'Ogród'},
    { path: 'gallery-13.webp', alt: 'Ogród'},
    { path: 'gallery-14.webp', alt: 'Ogród'},
    { path: 'gallery-15.webp', alt: 'Ogród'},
    { path: 'gallery-16.webp', alt: 'Ogród'},
];

var macyInstance = Macy({
    container: galleryGrid,
    columns: 2,
    margin: 20,
    useOwnImageLoader: true,
    mobileFirst: true,
    breakAt: {
        768: {
            columns: 3,
            margin: 43
        }
    }
});

const createPhotoNode = ({path,alt},index) => {
    const galleryImage = document.createElement('img');
    galleryImage.setAttribute('src',`./img/gallery/${path}`)
    galleryImage.setAttribute('alt',alt);
    galleryImage.setAttribute('tabindex','0');
    galleryImage.classList.add('w-full','hover:scale-105',"transition-all");

    const galleryItem = document.createElement('div');
    galleryItem.classList.add("gallery-item","transition-all","cursor-pointer",'animate-fade-in','opacity-0','overflow-hidden');
    galleryItem.dataset.photoIndex = index;
    galleryItem.appendChild(galleryImage);

    return galleryItem;
}

const loadPhotos = (startingIndex,amount) => {
    morePhotosButton.querySelector('.overlay').classList.remove('invisible');
    const photosToLoad = GALLERY_PHOTOS.slice(startingIndex,startingIndex+amount);
    photosToLoad.forEach((photo,index) => {
        let photoNode = createPhotoNode(photo,index+startingIndex);
        fragment.appendChild(photoNode);
    });
    lastPhotoAdded = startingIndex+amount;

    imagesLoaded(fragment,()=>{
        galleryGrid.appendChild(fragment);
        macyInstance.recalculate();
        morePhotosButton.querySelector('.overlay').classList.add('invisible');
        removeHidingGradient();
    })
}

const removeHidingGradient = () => {
    if(lastPhotoAdded >= GALLERY_PHOTOS.length){
        hidingGradient.remove();
    }
}

window.onload = () => {
    loadPhotos(0,PHOTOS_ON_LOAD);
}

morePhotosButton.addEventListener('click',()=>{
    loadPhotos(lastPhotoAdded,PHOTOS_PER_PAGE);
})