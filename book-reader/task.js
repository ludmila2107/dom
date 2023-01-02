let buttonFont = Array.from(document.querySelectorAll(".font-size"));
let book = document.querySelector('#book')

let index = 0;

for (let j = 0; j < buttonFont.length; j++) {

    buttonFont[j].onclick = ((el) => {
        el.preventDefault();

        const indexOfActiveSlide = (Array.from(buttonFont)).findIndex((slide) => slide.classList.contains("font-size_active"));
        
        const sizeOfTextBig = buttonFont[j].classList.contains("font-size_big");
        
        const sizeOfTextSmall = buttonFont[j].classList.contains("font-size_small");

        buttonFont[indexOfActiveSlide].classList.remove("font-size_active");

        buttonFont[j].classList.add("font-size_active");
        if (sizeOfTextBig) {
            book.classList = "book";
            book.classList.add("book_fs-big");
        } else if (sizeOfTextSmall) {
            book.classList = "book";
            book.classList.add("book_fs-small");
        } else {
            book.classList = "book";
        }

    });
}