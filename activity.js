// Selecting the search box and search icon
var searchBox = document.querySelector('.search-box');
var searchIcon = document.getElementById('search-icon');

// Function to toggle the visibility of the search box
function toggleSearchBox() {
    searchBox.classList.toggle('visible'); // Toggle the 'visible' class on the search box
    menu.classList.remove('visible')
}

// Adding event listener to the search icon to toggle search box visibility
searchIcon.addEventListener('click', toggleSearchBox);



// RESPONSIVENESS
var menu= document.querySelector('.navbar');
var searchIcon = document.getElementById('#menu-icon');

// Function to toggle the visibility of the search box
function menus() {
    menu.classList.toggle('visible'); // Toggle the 'visible' class on the search box
    searchBox.classList.remove('visible')
}

// Adding event listener to the search icon to toggle search box visibility
searchIcon.addEventListener('click', menus);


//HIDE MENU AND SEARCH
window.onscroll = () =>{
    menu.classList.remove('visible'); // Toggle the 'visible' class on the search box
    searchBox.classList.remove('visible')
}


//Header

let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY >0);
});