const ofertaMenuButton = document.getElementById('oferta-menu-button');
const ofertaMenu = document.getElementById('oferta-menu');
const dropdownMenu = document.getElementById('dropdown-menu');

ofertaMenuButton.addEventListener('click',e=>{
    ofertaMenu.classList.toggle('hidden');
});

window.addEventListener('click', e => {
    if(!dropdownMenu.contains(e.target)){
        ofertaMenu.classList.add('hidden');
    }
})