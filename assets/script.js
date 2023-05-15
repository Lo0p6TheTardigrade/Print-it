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
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', () => {
  console.log('click left');
});
arrowRight.addEventListener('click', () => {
  console.log('click right');
});
for (let i = 0; i < slides.length; i++) {
  // const element = array[index];
  document.querySelector('.banner-img').innerHTML = '<img src="' + slides.image + '" />';
  document.querySelector('#banner p').innerText = slides[i].tagLine;
  console.log(slides);
  document.querySelector('.dots').innerHTML = '<div class="dot "></div><div class="dot dot_selected"></div><div class="dot dot_selected"></div><div class="dot dot_selected"></div>';
}
