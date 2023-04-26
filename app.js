const btnNavBar = document.getElementById('show-menu');
const navBar = document.querySelector('.navbar');
const navLinks = document.querySelector('.btn-nav');

navLinks.addEventListener('click', closeNav);

function closeNav(){
    showMenu();
}


function showMenu(){
    if(navBar.style.display == 'flex'){
        navBar.style.display = 'none';
    }else{
        navBar.style.display = 'flex';
    }
}