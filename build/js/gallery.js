const galleryGrid = document.getElementById("gallery-grid");
const morePhotosButton = document.getElementById("more-photos-button");
const hidingGradient = document.getElementById("hiding-gradient");
const fragment = document.createDocumentFragment();
const PHOTOS_PER_PAGE = 5;
const PHOTOS_ON_LOAD = 9;
let lastPhotoAdded = 0;

const msnry = new Masonry( galleryGrid, {
    itemSelector: '.grid-item',
    percentPosition: true,
    gutter: 43
});

const GALLERY_PHOTOS = [
    {path: 'gallery-1.jpg', alt: 'Ogród ze schodami'},
    {path: 'gallery-2.jpg', alt: 'Ogród przy basenie'},
    {path: 'gallery-3.jpg', alt: 'Ogród tunelowy z różami'},
    {path: 'gallery-4.jpg', alt: 'Ryba pływająca w stawie z liliami'},
    {path: 'gallery-5.jpg', alt: 'Droga kamienna'},
    {path: 'gallery-6.jpg', alt: 'Ogród'},
    {path: 'gallery-7.jpg', alt: 'Ogród'},
    {path: 'gallery-8.jpg', alt: 'Ogród'},
    {path: 'gallery-9.jpg', alt: 'Ogród'},
    {path: 'gallery-10.jpg', alt: 'Ogród'},
    {path: 'gallery-11.jpg', alt: 'Ogród'},
    {path: 'gallery-12.jpg', alt: 'Ogród'},
    {path: 'gallery-13.jpg', alt: 'Ogród'},
    {path: 'gallery-14.jpg', alt: 'Ogród'},
    {path: 'gallery-15.jpg', alt: 'Ogród'},
    {path: 'gallery-16.jpg', alt: 'Ogród'},
]

const createPhotoNode = ({path,alt}) => {
    const galleryImage = document.createElement('img');
    galleryImage.setAttribute('src',`./img/gallery/${path}`)
    galleryImage.setAttribute('alt',alt)
    galleryImage.classList.add(['w-full']);

    const galleryItem = document.createElement('div');
    galleryItem.classList.add("grid-item","w-gallery-item","md:w-gallery-item-md","lg:w-gallery-item-lg","mb-[43px]","hover:scale-105","transition-all","cursor-pointer")
    galleryItem.appendChild(galleryImage);

    return galleryItem;
}

const loadPhotos = (startingIndex,amount) => {
    const photosToLoad = GALLERY_PHOTOS.slice(startingIndex,startingIndex+amount);
    photosToLoad.forEach((photo) => {
        let photoNode = createPhotoNode(photo);
        galleryGrid.appendChild(photoNode);
    });
    lastPhotoAdded = startingIndex+amount;

    imagesLoaded(galleryGrid,()=>{    
        msnry.reloadItems();
        msnry.layout();
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
    removeHidingGradient();
})