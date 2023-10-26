let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderNextButton = document.querySelector('.slider-next');
const sliderPrevButton = document.querySelector('.slider-prev');

sliderPrevButton.style.visibility = 'hidden';

document.querySelector('.slider-next').addEventListener('click', function() {
    offset = offset + 256;
    sliderPrevButton.style.visibility = 'visible';
    
    if (offset > 524) {
        sliderNextButton.style.visibility = 'hidden'; 
    }

    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function() {
    offset = offset - 256;
    sliderNextButton.style.visibility = 'visible';

    if (offset < 1) {
        sliderPrevButton.style.visibility = 'hidden';
    }

    sliderLine.style.left = -offset + 'px';
});

