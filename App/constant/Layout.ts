/* eslint-disable sort-keys */
import {Dimensions} from 'react-native';

export const SPACING = 20;
// Function to calculate responsive dimensions based on orientation
export const {
  width,
  height,
  calculateWidth,
  responsivePadding,
  responsiveSizes,
} = (() => {
  const {width, height} = Dimensions.get('window');

  // Calculate responsive values based on the device's orientation
  const responsiveWidth = width < height ? width : height;
  const responsiveHeight = width < height ? height : width;

  const roundup = (x: number) => Math.round(responsiveWidth * x);

  // Return an object with responsive dimensions
  return {
    width: responsiveWidth,
    height: responsiveHeight,
    // You can add more responsive values as needed
    calculateWidth: (x: number) => Math.round((responsiveWidth * x) / 100),
    responsivePadding: roundup(0.02),
    responsiveSizes: {
      //fonts
      body: roundup(0.035),
      medium: roundup(0.039),
      small: roundup(0.03),
      tiny: roundup(0.029),
      title: roundup(0.045),
      large: roundup(0.05),
      xLarge: roundup(0.056),
      titleLarge: roundup(0.055),

      //spacing
      padding: roundup(0.05),
      spaceTiny: roundup(0.014),
      spaceSmall: roundup(0.025),
      space: roundup(0.05),
      spaceMedium: 30,
      spaceLarge: roundup(0.102),
      spaceX: roundup(0.12),
      spaceXL: 80,
      spaceXXL: 100,
      marginBottom: 30,

      //button
      buttonHeight: roundup(0.12),
      buttonRadius: roundup(0.012),

      //inputs
      FormMarginBottom: roundup(0.1),
      inputHeight: roundup(0.12),
      inputBorderWidth: 1,
      inputPadding: 10,

      radius: roundup(0.022),
      icon: roundup(0.062),
    },
  };
})();
