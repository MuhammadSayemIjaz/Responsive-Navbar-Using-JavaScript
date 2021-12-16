// Getting Navbar
const Links = document.querySelector(".links");
const toggleBtn = document.querySelector(".navToggle"); 

toggleBtn.addEventListener("click", function () {
    
    Links.classList.toggle("showLinks");
});