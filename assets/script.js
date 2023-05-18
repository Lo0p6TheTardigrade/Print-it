// Array Slideshow
const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
    // dot: 'dot_selected',
  },
  {
    image: 'slide2.jpg',
    tagLine: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
    // dot: 'dot_selected',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
    // dot: 'dot_selected',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
    // dot: 'dot_selected',
  },
];
console.log(slides);

// Constants for the Arrows
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Create banner img
const bannerImgCreate = document.getElementById('banner');
bannerImgCreate.appendChild(document.createElement('img')).classList.add('banner-img');
console.log(bannerImgCreate);

// Constants for the dots
const dots = document.querySelector('.dots');
console.log(dots);
const dot = document.querySelector('.dot');

// ForEach for the slides dots
slides.forEach(() => {
  dots.appendChild(document.createElement('div')).classList.add('dot');
  // document.querySelector('.dot').classList.add('dot_selected');
});

const dotsArray = [
  {
    dot: document.querySelector('.dot').classList.add('dot_selected'),
  },
  {
    dot: document.querySelector('.dot').classList.add('dot_selected'),
  },
  {
    dot: document.querySelector('.dot').classList.add('dot_selected'),
  },
  {
    dot: document.querySelector('.dot').classList.add('dot_selected'),
  },
];
// dotsArray.appendChild(document.createElement('div')).classList.add('dot_selected');

// Variable index for slides
let i = 0;

// Create src attribute for slideshow
document.querySelector('.banner-img').setAttribute('src', './assets/images/slideshow/' + slides[0].image);
// document.querySelector('.dot').classList.add(slides[i].dot);

arrowLeft.addEventListener('click', () => {
  i--;
  console.log('click left');
  document.querySelector('.banner-img').setAttribute('src', './assets/images/slideshow/' + slides[i].image);
  document.querySelector('#banner p').innerHTML = slides[i].tagLine;
});

arrowRight.addEventListener('click', () => {
  i++;
  console.log('click right');
  document.querySelector('.banner-img').setAttribute('src', './assets/images/slideshow/' + slides[i].image);
  document.querySelector('#banner p').innerHTML = slides[i].tagLine;
});

//
//
//

// const bulletPointSelected = document.querySelector('.dots');
// const bulletPointUnselected = document.querySelector('.dots');
// const bulletPointSelected = (document.querySelector('.dots').innerHTML = '<div class="dot dot_selected">');
// const bulletPointUnselected = (document.querySelector('.dots').innerHTML = '<div class="dot">');
// const bulletPointArray = [
//   {
//     pointSelected: bulletPointSelected,
//   },
//   {
//     pointSelectedUnselected: bulletPointUnselected,
//   },
// ];
// console.log(bulletPointArray);
// slides.concat(bulletPointArray);

// slidesBulletArray = slides.concat(bulletPointArray);

// for (let i = 0; i < slides.length; i++) {
//   // const element = array[index];
//   // document.querySelector('.banner-img').innerHTML = '<img src="' + slides.image + '" />';
//   document.querySelector('.banner-img').innerHTML = slides[i].image;
//   document.querySelector('#banner p').innerHTML = slides[i].tagLine;
//   console.log(slides);
//   document.querySelector('.dots').innerHTML = '<div class="dot "></div><div class="dot dot_selected"></div><div class="dot dot_selected"></div><div class="dot dot_selected"></div>';
// }
