function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var slideIndex = 1;
showSlide(slideIndex);

function majuMundur(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("gallery-sert-slide");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}