let toggleButton = document.querySelector('.toggle');
let navBar = document.querySelector('.nav_bar');
let header = document.querySelector('header')
toggleButton.addEventListener('click', function(){
    // navBar.classList
    // console.log(navBar.classList);
    navBar.classList.toggle('active');

    toggleButton.classList.toggle('active');
    header.classList.toggle('active');

    
});

let theme = document.getElementById('darkmode');
theme.addEventListener('click', function(){
    document.body.classList.toggle('dark')
    theme.classList.toggle('active')
});
