let divsActive = document.querySelectorAll(".reveal");

function isVisible(divActive) {
    const {
        top,
        bottom
    } = divActive.getBoundingClientRect();
    if (bottom < 0) {
        return false;
    }
    if (top > window.innerHeight) {
        return false;
    }
    divActive.className = "reveal reveal_active";
}

function every(divsActive) {
    divsActive.forEach((element) => {
        isVisible(element);
    });
}

window.addEventListener("scroll", () => every(divsActive));