let sliderImages = document.querySelectorAll(".slide"),
    sliderText = document.querySelectorAll(".content__slide")
arrowUp = document.querySelector("#arrow-up"),
    arrowDown = document.querySelector("#arrow-down"),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
        sliderText[i].style.display = "none";

    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
    sliderText[0].style.display = "block";

}

function slideUp() {
    reset();
    sliderImages[current - 1].style.display = "block";
    sliderText[current - 1].style.display = "block";
    current--;
}

function slideDown() {
    reset();
    sliderImages[current + 1].style.display = "block";
    sliderText[current + 1].style.display = "block";

    current++;
}

arrowUp.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideUp();
});

arrowDown.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideDown();
});

startSlide();

