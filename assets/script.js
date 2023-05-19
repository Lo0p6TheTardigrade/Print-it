// Array Slideshow
const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];
// console.log(slides);

// Variable index for slides
let i = 0;

// Constants for the Arrows
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Create banner img
const bannerImgCreate = document.getElementById('banner');
bannerImgCreate.appendChild(document.createElement('img')).classList.add('banner-img');
// console.log(bannerImgCreate);

// Constants for the dots
const dotsDiv = document.querySelector('.dots');
// console.log(dotsDiv);

const dots = document.getElementsByClassName('dot');
// console.log(dots);

// ForEach object in slides
slides.forEach(() => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotsDiv.appendChild(dot);
});
dots[0].classList.add('dot_selected');

// Create src attribute for slideshow
document.querySelector('.banner-img').setAttribute('src', './assets/images/slideshow/' + slides[0].image);
document.querySelector('.dot').classList.add('dot_selected');

arrowLeft.addEventListener('click', () => {
  console.log('click left');

  i--;
  if (i < 0) {
    i = slides.length - 1;
  }

  document.querySelector('.banner-img').setAttribute('src', './assets/images/slideshow/' + slides[i].image);
  document.querySelector('#banner p').innerHTML = slides[i].tagLine;

  // ForEach for dots
  Array.from(dots).forEach((dot) => {
    dot.classList.remove('dot_selected');
    console.log(dot);
  });
  dots[i].classList.add('dot_selected');
});

arrowRight.addEventListener('click', () => {
  console.log('click right');

  i++;
  if (i >= slides.length) {
    i = 0;
  }

  document.querySelector('.banner-img').setAttribute('src', './assets/images/slideshow/' + slides[i].image);
  document.querySelector('#banner p').innerHTML = slides[i].tagLine;

  // ForEach for dots
  Array.from(dots).forEach((dot) => {
    dot.classList.remove('dot_selected');
    console.log(dot);
  });
  dots[i].classList.add('dot_selected');
});
