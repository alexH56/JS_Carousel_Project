let currentSlide = 1;

const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');

function hideSlide () {
  slides[currentSlide - 1].style.display = 'none';
}

function deactivate () {
  dots[currentSlide - 1].className = dots[currentSlide - 1].className.replace('active', '');
}

function showSlide (slideNumber) {
  if (slideNumber > slides.length) {
    currentSlide = 1;
  }

  if (slideNumber < 1) {
    currentSlide = slides.length;
  }

  // What if the slideshow has way more slides in it? Does it still make sense to
  // loop through all the nodes, or is there a better way? Also, am I using the term "node" correctly?

  // for (let i = 0; i < slides.length; i += 1) {
  //   slides[i].style.display = 'none';
  // }

  // for (let i = 0; i < dots.length; i += 1) {
  //   dots[i].className = dots[i].className.replace('active', '');
  // }

  slides[currentSlide - 1].style.display = 'block';

  // What's up with "classList"? How does it differ, and why wouldn't className.replace('', 'active') work?
  dots[currentSlide - 1].classList.add('active');
}

function increaseSlide () {
  hideSlide();
  deactivate();
  currentSlide += 1;
  showSlide(currentSlide);
}

function decreaseSlide () {
  hideSlide();
  deactivate();
  currentSlide -= 1;
  showSlide(currentSlide);
}

// How does this work? How does slideNumber or currentSlide get changed by clicking on the dot?
function specificSlide (slideNumber) {
  hideSlide();
  deactivate();
  currentSlide = slideNumber;
  showSlide(currentSlide);
}

document.getElementsByClassName('prev')[0].addEventListener('click', decreaseSlide);

document.getElementsByClassName('next')[0].addEventListener('click', increaseSlide);

showSlide(currentSlide);
