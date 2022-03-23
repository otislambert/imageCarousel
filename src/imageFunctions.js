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
  return new Promise((resolve, reject) => {
    const natHeight = image.naturalHeight;
    const natWidth = image.naturalWidth;

    let height = 0;
    let width = 0;

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
        height = maxHeight;

        const percentage = maxHeight / natHeight;
        const setWidth = natWidth * percentage;

        width = setWidth;
      } else {
        width = maxWidth;

        const percentage = maxWidth / natWidth;
        const setHeight = natHeight * percentage;

        height = setHeight;
      }
    } else {
      width = natWidth;
      height = natHeight;
    }

    if (height > 0 && width > 0) {
      resolve({ height: height, width: width });
    } else {
      reject(new Error('failed to get proper height and width'));
    }
  });
}

export { loadImage, sizeImage, addToCarousel };
