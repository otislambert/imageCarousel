import './style.css';

import bloodMoonPhoto from './images/bloodmoon.jpg';
import icePhoto from './images/ice.jpg';
import riverPhoto from './images/river.jpg';
import rockWavesPhoto from './images/rockwaves.jpg';
import waterfallPhoto from './images/waterfalls.jpg';

import leftArrow from './icons/left-arrow.png';
import rightArrow from './icons/right-arrow.png';

import { loadImage, sizeImage, addToCarousel } from './imageFunctions.js';

const body = document.querySelector('body');

const createHTMLbody = (() => {
  const main = document.createElement('div');
  main.setAttribute('id', 'carousel');
  main.classList.add('centerContents');
  body.appendChild(main);

  const backArrow = new Image();
  backArrow.src = leftArrow;
  backArrow.setAttribute('id', 'backArrow');
  backArrow.classList.add('navArrow');
  main.appendChild(backArrow);

  const carouselCenter = document.createElement('div');
  carouselCenter.setAttribute('id', 'carouselCenter');
  main.appendChild(carouselCenter);

  const imageContainer = document.createElement('div');
  imageContainer.setAttribute('id', 'imageContainer');
  carouselCenter.appendChild(imageContainer);

  const selectors = document.createElement('div');
  selectors.setAttribute('id', 'selectorsDiv');
  carouselCenter.appendChild(selectors);

  const nextArrow = new Image();
  nextArrow.src = rightArrow;
  nextArrow.setAttribute('id', 'nextArrow');
  nextArrow.classList.add('navArrow');
  main.appendChild(nextArrow);

  const navArrows = [backArrow, nextArrow];

  navArrows.forEach((arrow) => {
    arrow.addEventListener('click', (e) => {
      const x = e.target.id === 'nextArrow' ? 1 : -1;
      nextImage(x);
    });
  });

  return {
    main,
    imageContainer,
    selectors,
    backArrow,
    nextArrow,
  };
})();

const imageManagement = new Promise((resolve, reject) => {
  const parent = document.querySelector('#imageContainer');

  const selectorDiv = createHTMLbody.selectors;
  const imageList = [];
  const selectorList = [];

  const addImages = () => {
    return new Promise((resolve, reject) => {
      Promise.all([
        loadImage(bloodMoonPhoto),
        loadImage(icePhoto),
        loadImage(riverPhoto),
        loadImage(rockWavesPhoto),
        loadImage(waterfallPhoto),
      ]).then((images) => {
        images.forEach((image) => {
          addToCarousel(image);
          imageList.push(image);

          const createSelector = (() => {
            const selector = document.createElement('div');
            selector.classList.add('imageSelector');
            selectorDiv.appendChild(selector);
            selectorList.push(selector);
          })();
        });
        if (imageList.length === 5) {
          const res = { imageList, selectorList };
          resolve(res);
        } else {
          reject(new Error('Not all Images were added'));
        }
      });
    });
  };

  addImages()
    .then((res) => {
      if (selectorList.length === imageList.length) {
        resolve();
      } else {
        console.error('not all images have selectors');
      }
    })
    .catch((error) => {
      reject(error);
    });
});

const setImages = (selected) => {
  const images = Array.from(
    document.querySelector('#imageContainer').getElementsByTagName('img')
  );

  const hidden = images.filter((image) => image !== selected);
  hidden.forEach((image) => {
    console.log(image);
    image.classList.add('hidden');
  });
};

// function changeImagesSelector(e) {
//   const images = imageManagement.images;

//   const selectedIMG = images[parseInt(e.target.id.replace('selector', ''))];
//   const others = images.filter((image) => image !== selectedIMG);

//   hideOtherImages(others);
//   showSelectedImage(selectedIMG);

//   const selectors = imageManagement.selectors;

//   const selectedSel = e.currentTarget;
//   const otherSels = selectors.filter((ele) => ele !== selectedSel);

//   selectedSel.classList.add('selected');
//   otherSels.forEach((ele) => ele.classList.remove('selected'));

//   return;
// }

// function hideOtherImages(others) {
//   others.forEach((image) => {
//     image.classList.add('hidden');
//     image.style.width = '0px';
//   });
// }

// function showSelectedImage(image) {
//   image.classList.remove('hidden');

//   const natHeight = image.naturalHeight;
//   const natWidth = image.naturalWidth;

//   const maxWidth = Math.floor(
//     Math.max(
//       document.documentElement.clientWidth || 0,
//       window.innerWidth || 0
//     ) *
//       0.8 *
//       0.8
//   );
//   const maxHeight = Math.floor(
//     Math.max(
//       document.documentElement.clientHeight || 0,
//       window.innerHeight || 0
//     ) *
//       0.8 *
//       0.8
//   );

//   if (natHeight > maxHeight || natWidth > maxWidth) {
//     if (natHeight > natWidth) {
//       image.style.height = maxHeight + 'px';

//       const percentage = maxHeight / natHeight;
//       const setWidth = natWidth * percentage;

//       image.style.width = setWidth + 'px';
//     } else {
//       image.style.width = maxWidth + 'px';

//       const percentage = maxWidth / natWidth;
//       const setHeight = natHeight * percentage;

//       image.style.height = setHeight + 'px';
//     }
//   } else {
//     image.style.width = natWidth + 'px';
//     image.style.height = natHeight + 'px';
//   }
// }

// function nextImage(x) {
//   const images = imageManagement.images;
//   const selectors = imageManagement.selectors;

//   const max = images.length - 1;
//   const current = parseInt(
//     Array.from(document.querySelectorAll('.imageSelector'))
//       .find((selector) => Array.from(selector.classList).includes('selected'))
//       .id.replace('selector', '')
//   );

//   let next = current + x;
//   next = next > max ? 0 : next;
//   next = next < 0 ? max : next;

//   const selectedIMG = images[next];
//   const others = images.filter((image) => image !== selectedIMG);

//   showSelectedImage(selectedIMG);
//   hideOtherImages(others);

//   selectors[next].classList.add('selected');

//   const otherSels = selectors.filter((ele) => ele !== selectors[next]);
//   otherSels.forEach((ele) => ele.classList.remove('selected'));
// }
