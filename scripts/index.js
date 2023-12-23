

/* Navbar section */

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
// show menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    })
}
// close menu
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    })
}

/* Show active scroll section */

window.addEventListener("scroll", ()=>{
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-list a");

    sections.forEach((section)=>{
        const sectionTop = section.offsetTop-600;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
         // Check if the current section is in the viewport
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Add the 'active' class to the corresponding navbar link
            navLinks.forEach((link)=>{
                // console.log(sectionId);
                if(link.getAttribute('href')=== `#${sectionId}`){
                    link.classList.add('active-link');
                }
                else{
                    link.classList.remove('active-link');
                }
            })
        }
    })  
});
