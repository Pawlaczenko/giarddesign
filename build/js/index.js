const searchMenuButton = document.getElementById("search-menu-button");
const searchInput = document.getElementById("navigation-searchbar");

searchMenuButton.addEventListener('mousedown',(e) => {
    searchInput.setAttribute('aria-hidden',false);
    setTimeout(() => {
        searchInput.focus();
      }, 1);
});

searchInput.addEventListener('blur',(e) => {
    searchInput.setAttribute('aria-hidden',true);
})