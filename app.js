
const btnNavBar = document.getElementById('show-menu');
const navBar = document.querySelector('.navbar');
const navLinks = document.querySelector('.navbar');

navBar.addEventListener('click', closeNav);

function closeNav(){
    if(navBar.style.display == 'flex'){
        navBar.style.display = 'none';
    }
}


function showMenu(){
    if(navBar.style.display == 'flex'){
        navBar.style.display = 'none';
    }else{
        navBar.style.display = 'flex';
    }
}
