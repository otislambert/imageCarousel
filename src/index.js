import "./style.css";

import bloodMoonPhoto from "./images/bloodmoon.jpg";
import icePhoto from "./images/ice.jpg";
import riverPhoto from "./images/river.jpg";
import rockWavesPhoto from "./images/rockwaves.jpg";
import waterfallPhoto from "./images/waterfalls.jpg";

let playing = true;
let count = 0;

const body = document.querySelector("body");

const createHTMLbody = (() => {
  const main = document.createElement("div");
  main.setAttribute("id", "mainDiv");
  main.classList.add("centerContents");
  body.appendChild(main);

  const imgCar = document.createElement("div");
  imgCar.setAttribute("id", "imgCarousel");
  main.appendChild(imgCar);

  const selectors = document.createElement("div");
  selectors.setAttribute("id", "selectorsDiv");
  main.appendChild(selectors);

  return {
    main,
    imgCar,
    selectors,
  };
})();

const imageManagement = (() => {
  const parent = document.querySelector("#imgCarousel");

  const bloodMoon = new Image();
  const ice = new Image();
  const river = new Image();
  const rockWaves = new Image();
  const waterfall = new Image();

  bloodMoon.src = bloodMoonPhoto;
  ice.src = icePhoto;
  river.src = riverPhoto;
  rockWaves.src = rockWavesPhoto;
  waterfall.src = waterfallPhoto;

  parent.appendChild(bloodMoon);
  parent.appendChild(ice);
  parent.appendChild(river);
  parent.appendChild(rockWaves);
  parent.appendChild(waterfall);

  const images = Array.from(parent.getElementsByTagName("img"));

  for (let i = 0; i < images.length; i++) {
    const selectorsDiv = createHTMLbody.selectors;

    const selector = document.createElement("div");
    selector.setAttribute("id", `selector${i}`);
    selector.classList.add("imageSelector");
    selectorsDiv.appendChild(selector);
    selector.addEventListener("click", changeImagesSelector);
  }
  const selectors = Array.from(document.querySelectorAll(".imageSelector"));

  let selected = images[0];

  selectors[0].classList.add("selected");

  let unselected = images.filter((image) => image != selected);

  hideOtherImages(unselected);
  showSelectedImage(selected);

  return {
    bloodMoon,
    ice,
    river,
    rockWaves,
    waterfall,
    images,
    selectors,
  };
})();

function changeImagesSelector(e) {
  const images = imageManagement.images;

  const selectedIMG = images[parseInt(e.target.id.replace("selector", ""))];
  const others = images.filter((image) => image !== selectedIMG);

  hideOtherImages(others);
  showSelectedImage(selectedIMG);

  const selectors = imageManagement.selectors;

  const selectedSel = e.currentTarget;
  const otherSels = selectors.filter((ele) => ele !== selectedSel);

  selectedSel.classList.add("selected");
  otherSels.forEach((ele) => ele.classList.remove("selected"));

  return;
}

function hideOtherImages(others) {
  others.forEach((image) => {
    image.classList.add("hidden");
    image.style.width = "0px";
  });
}

function showSelectedImage(image) {
  image.classList.remove("hidden");

  const natHeight = image.naturalHeight;
  const natWidth = image.naturalWidth;

  const maxWidth =
    Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    ) *
    0.8 *
    0.8;
  const maxHeight =
    Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    ) *
    0.8 *
    0.8;

  if (natHeight > maxHeight || natWidth > maxWidth) {
    if (natHeight > natWidth) {
      image.style.height = maxHeight + "px";

      const percentage = image.height / image.naturalHeight;
      const setWidth = image.naturalWidth * percentage;

      image.style.width = setWidth + "px";
    } else {
      image.style.width = maxWidth + "px";

      const percentage = image.width / image.naturalWidth;
      const setHeight = image.naturalHeight * percentage;

      image.style.height = setHeight + "px";
    }
  } else {
    image.style.width = natWidth + "px";
    image.style.height = natHeight + "px";
  }
}
