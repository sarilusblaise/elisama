// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels



// global variable
const navbar = document.getElementById("nav");
const navToggle = document.querySelector(".nav-toggleBtn");
const allLink = document.querySelectorAll(".scroll-link");
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links")
const btnContainer = document.querySelector(".btn-container");
const topLink = document.querySelector(".top-link");


btnContainer.addEventListener("click", function(){
   const linkContainerHeight = linkContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (linkContainerHeight === 0){
        linkContainer.style.height = `${linksHeight}px`;
        btnContainer.classList.add("display-btn");
    }else{
        linkContainer.style.height = 0;
        btnContainer.classList.remove("display-btn");
        
    }
}
);

window.addEventListener("scroll", function(){
    if(window.pageYOffset > navbar.getBoundingClientRect().height){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav");
    }

    if(window.pageYOffset > 500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
});

allLink.forEach(link => {
    link.addEventListener("click", function(event){
        //event.preventDefault();

    });
});