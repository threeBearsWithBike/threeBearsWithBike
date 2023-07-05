const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slideCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activSlideIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

function changeSlide(direct) {
if (direct === 'up') {
    activSlideIndex++;
    if (activSlideIndex === slideCount) {
        activSlideIndex = 0;
    }
} else if (direct === 'down') {
    activSlideIndex--;
    if (activSlideIndex < 0) {
        activSlideIndex = slideCount - 1;
    }
}

const height = container.clientHeight;

mainSlide.style.transform = `translateY(-${activSlideIndex * height}px)`;
sidebar.style.transform = `translateY(${activSlideIndex * height}px)`;
}
