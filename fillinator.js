
function fillinate(image, xCoordinate, yCoordinate, startColor, fillColor){
  if (!image[xCoordinate]) return;

  if  (!image[xCoordinate][yCoordinate]) return;

  if (!checkColors(image[xCoordinate][yCoordinate], startColor)) return;

  changeColor(image[xCoordinate][yCoordinate], fillColor);
  //console.log('this pixel value is ', image[xCoordinate][yCoordinate]);
  fillinate(image, xCoordinate+1, yCoordinate, startColor, fillColor);
  fillinate(image, xCoordinate-1, yCoordinate, startColor, fillColor);
  fillinate(image, xCoordinate, yCoordinate+1, startColor, fillColor);
  fillinate(image, xCoordinate, yCoordinate-1, startColor, fillColor);
}

function checkColors(pixelV1, pixelV2) {
  if (pixelV1[0] === pixelV2[0] && pixelV1[1] === pixelV2[1] && pixelV1[2] === pixelV2[2]) {
    return true;
  } else {
    return false;
  }
}

function changeColor(pixel, color) {
  pixel[0] = color[0];
  pixel[1] = color[1];
  pixel[2] = color[2];
}

module.exports = {
  fillinate,
  checkColors,
  changeColor
};