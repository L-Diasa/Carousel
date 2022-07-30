const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
myTimer = setInterval(() => move('next'), 4000);

document.getElementById('carousel-button-next').addEventListener('click', () => move('next'));
document.getElementById('carousel-button-prev').addEventListener('click', () => move('prev'));

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function move(slide) {
    hideAllSlides();
    clearInterval(myTimer);

    if(slide === 'next') {
        if (slidePosition === totalSlides - 1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }    
    }
    else if(slide === 'prev') {
        if (slidePosition === 0) {
            slidePosition = totalSlides - 1;
        } else {
            slidePosition--;
        }
    }

    myTimer = setInterval(() => move('next'), 4000);
    slides[slidePosition].classList.add("carousel-item-visible");
}