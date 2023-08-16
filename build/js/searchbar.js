const searchForm = document.getElementById('search-form');
const searchMenuButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const searchWrapper = document.getElementById('search-wrapper');

const closeSearchbar = () => {
    searchForm.classList.add('md:invisible');
    searchForm.classList.add('md:scale-x-0');
}

searchMenuButton.addEventListener('click',e=>{
    searchForm.classList.toggle('md:invisible');
    searchForm.classList.toggle('md:scale-x-0');

    setTimeout(()=>{
        searchInput.focus()
    },100);
});

window.addEventListener('click', e => {
    if(!searchWrapper.contains(e.target)){
        closeSearchbar();
    }
})