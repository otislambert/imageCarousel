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
        for (let i = 0; i < images.length; i++) {
          addToCarousel(images[i]);
          imageList.push(images[i]);

          const createSelector = (() => {
            const selector = document.createElement('div');
            selector.id = `selector${i}`;
            selector.classList.add('imageSelector');
            selectorDiv.appendChild(selector);
            selectorList.push(selector);
          })();
        }
        if (imageList.length === 5) {
          resolve();
        } else {
          reject(new Error('Not all Images were added'));
        }
      });
    });
  };

  addImages()
    .then((res) => {
      if (selectorList.length === imageList.length) {
        setImages(imageList[0]);
        selectorList.forEach((selector) => {
          selector.addEventListener('click', changeImagesSelector);
        });
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
  sizeImage(selected).then((res) => {
    selected.style.height = res.height + 'px';
    selected.style.width = res.width + 'px';
    selected.classList.remove('hidden');
  });

  const images = Array.from(
    document.querySelector('#imageContainer').getElementsByTagName('img')
  );

  const selectors = Array.from(
    document.querySelector('#selectorsDiv').getElementsByTagName('div')
  );

  const index = images.findIndex((image) => image === selected);

  selectors[index].classList.add('selected');
  selectors
    .filter((selector) => selector !== selectors[index])
    .forEach((selector) => selector.classList.remove('selected'));

  const hidden = images.filter((image) => image !== selected);
  hidden.forEach((image) => {
    image.classList.add('hidden');
    image.style.width = '0px';
    image.style.height = '0px';
  });

  console.log(images);
};

function changeImagesSelector(e) {
  const images = Array.from(
    document.querySelector('#imageContainer').getElementsByTagName('img')
  );

  const selectedIMG = images[parseInt(e.target.id.replace('selector', ''))];

  setImages(selectedIMG);
}

function nextImage(x) {
  const images = Array.from(
    document.querySelector('#imageContainer').getElementsByTagName('img')
  );
  const selectors = Array.from(
    document.querySelector('#selectorsDiv').getElementsByTagName('div')
  );

  const max = images.length - 1;
  const current = parseInt(
    Array.from(document.querySelectorAll('.imageSelector'))
      .find((selector) => Array.from(selector.classList).includes('selected'))
      .id.replace('selector', '')
  );

  let next = current + x;
  next = next > max ? 0 : next;
  next = next < 0 ? max : next;

  setImages(images[next]);
}
