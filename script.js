const menuButton = document.getElementById('menu-button') ;
const mobileMenu = document.getElementById('mobile-menu') ;
const menuIcon = document.getElementById('menu-icon') ;
const closeIcon = document.getElementById('close-icon') ;

menuButton.addEventListener('click' , ()=>{
    const isExpanded = menuButton.getAttribute('aria-expanded') === "true" ;
    menuButton.setAttribute("aria-expanded",!isExpanded) ;
    mobileMenu.classList.toggle("hidden") ;
    menuIcon.classList.toggle("hidden") ;
    closeIcon.classList.toggle("hidden") ;

})