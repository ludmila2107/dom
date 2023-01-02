let textAdverts = document.querySelectorAll(".rotator__case");

let index = 0;
console.log(textAdverts.length);
function changeText() {
    (index < textAdverts.length - 1) ? index++ : index = 0;

    const indexOfActiveSlide = (Array.from(textAdverts)).findIndex((slide) => slide.classList.contains("rotator__case_active"));

    textAdverts[indexOfActiveSlide].classList.remove("rotator__case_active");
    textAdverts[index].classList.add("rotator__case_active");
}

setInterval(changeText, 1000)