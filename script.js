let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//

// let searchBtn = document.getElementById("searchBtn");

// let searchOutput = document.getElementById("searchOutput");

// let selectLanguage = document.querySelector("#languageSelect");

// searchBtn.addEventListener("click", function () {
//   searchOutput.placeholder = `Use Language: ${selectLanguage.value}`;
//   if (selectLanguage.value === "null")
//     searchOutput.placeholder = "Choose language from select!";
// }); 

let plane = document.getElementById("plane")
let popUp = document.getElementById("popUp")
let overlay = document.getElementById("overlay")

plane.addEventListener("click", function () {
    popUp.classList.remove("hidePopUp");
})
overlay.addEventListener("click", function () {
    popUp.classList.add("hidePopUp");
})





