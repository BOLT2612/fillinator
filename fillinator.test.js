const {fillinate, checkColors, changeColor} = require ('./fillinator');
describe('Testing the ability to fill in a color', () => {
  describe('changeColor function test', () => {
    it('Changes the color of a given pixel', () => {
      const pixel = [ 0x55, 0x55, 0x55 ];
      const newColor = [0xBA,0x55,0xD3];
      changeColor(pixel, newColor);
      expect(pixel).toEqual(newColor);
    } );
  });

  describe('checkColors function test', () => {
    it('tests two pixel values to see if they\'re the same', () => {
      const pixel1 = [ 0x55, 0x55, 0x55 ];
      const pixel2 = [ 0x55, 0x55, 0x55 ];
      const pixel3 = [ 0xAA, 0xAA, 0xAA ];
      expect(checkColors(pixel1, pixel2)).toBe(true);
      expect(checkColors(pixel1, pixel3)).toBe(false); 
    });
  });

  describe('fillinate function',() => {
    test('should change the color of the entered pixel',() => {
    // for this test, a pixel is an array of 3 positive integers: [ r, g, b]
    // and an image is a 2 dimensional collection of pixels [row-coordinate][col-coordinate][pixel rgb values]

    // create our test image
    var inputImage = [], expectedImage = [], i, j;
    var maxNumRows = 2, maxNumCols = 2;

    // fill the inputImage  with white pixels
    // fill the expectedImage with "MediumOrchid" colored pixels [0xBA,0x55,0xD3].
    for (i = 0; i < maxNumRows; i++) {
      inputImage[i] = [];
      expectedImage[i] = [];
      for (j = 0; j < maxNumCols; j++) {
        inputImage[i][j] = [0,0,0];
        expectedImage[i][j] = [0xBA,0x55,0xD3];
      }
    }
      fillinate(inputImage, 0, 0, [0,0,0], [0xBA,0x55,0xD3]);
      expect(inputImage).toEqual(expectedImage);
    });
  });

})