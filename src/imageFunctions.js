function loadImage(url) {
  return new Promise((resolve, reject) => {
    let image = new Image();

    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      let message = 'Could not load image at ' + url;
      reject(new Error(message));
    };

    image.src = url;
  });
}

function addToCarousel(image) {
  const carousel = document.querySelector('#imageContainer');
  carousel.appendChild(image);
  return image;
}

function sizeImage(image) {
  const natHeight = image.naturalHeight;
  const natWidth = image.naturalWidth;

  const height = '';
  const width = '';

  const maxWidth = Math.floor(
    Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    ) *
      0.8 *
      0.8
  );
  const maxHeight = Math.floor(
    Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    ) *
      0.8 *
      0.8
  );

  if (natHeight > maxHeight || natWidth > maxWidth) {
    if (natHeight > natWidth) {
      image.style.height = maxHeight + 'px';

      const percentage = maxHeight / natHeight;
      const setWidth = natWidth * percentage;

      width = setWidth;
    } else {
      image.style.width = maxWidth + 'px';

      const percentage = maxWidth / natWidth;
      const setHeight = natHeight * percentage;

      height = setHeight;
    }
  } else {
    width = natWidth;
    height = natHeight;
  }

  return { height, width };
}

function getImageHeight(image) {
  return new Promise((reject, resolve) => {
    const natHeight = image.naturalHeight;
    const height = '';
    const maxHeight = Math.floor(
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ) *
        0.8 *
        0.8
    );
    if (natHeight > maxHeight) {
      image.style.width = maxWidth + 'px';

      const percentage = maxWidth / natWidth;
      const setHeight = natHeight * percentage;

      height = setHeight;
    } else {
      height = natHeight;
    }

    if (height > 0) {
      resolve(height);
    }
  });
}
export { loadImage, sizeImage, addToCarousel };
