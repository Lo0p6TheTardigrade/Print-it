const slides = [
  {
    // image: '<img src="assets/images/slideshow/slide2.jpg" />',
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
console.log(slides);

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bulletPoint = document.querySelector('.dot');
let i = 0;
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

document.querySelector('.dots').innerHTML = '<div class="dot "></div><div class="dot dot_selected"></div><div class="dot dot_selected"></div><div class="dot dot_selected"></div>';

//
//
//

// for (let i = 0; i < slides.length; i++) {
//   // const element = array[index];
//   // document.querySelector('.banner-img').innerHTML = '<img src="' + slides.image + '" />';
//   document.querySelector('.banner-img').innerHTML = slides[i].image;
//   document.querySelector('#banner p').innerHTML = slides[i].tagLine;
//   console.log(slides);
//   document.querySelector('.dots').innerHTML = '<div class="dot "></div><div class="dot dot_selected"></div><div class="dot dot_selected"></div><div class="dot dot_selected"></div>';
// }

// document.querySelector('.banner-img').innerHTML = '<img class="banner-img" src="./assets/images/slideshow/' + slides[i].image + '" alt="Banner Print-it" />';
// document.querySelector('.banner-img').innerHTML = slides[i].image;
