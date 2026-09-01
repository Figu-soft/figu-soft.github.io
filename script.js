// Año actual en el footer

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// Efecto sencillo al hacer scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

