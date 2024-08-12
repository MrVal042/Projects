import React from 'react';
import { View } from 'react-native';

import { responsiveSizes } from '@constant';
const {
  space: Space,
  spaceLarge,
  spaceMedium,
  spaceSmall,
  spaceTiny,
  spaceX,
  spaceXL,
} = responsiveSizes;

interface Props {
  space?: 't' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
  horizontal?: boolean;
}
/**
 *
 * @param space t: 5, s: 10, m: 30, l: 40, xl: 50, xxl: 100
 * @returns 20
 */
export default function Divider({
  space,
  horizontal = false,
}: Props): JSX.Element {
  let margin = 0;
  const styleProperty = horizontal ? 'marginLeft' : 'marginTop';

  switch (space) {
    case 't':
      margin = spaceTiny;
      break;
    case 's':
      margin = spaceSmall;
      break;
    case 'm':
      margin = spaceMedium;
      break;
    case 'l':
      margin = spaceLarge;
      break;
    case 'xl':
      margin = spaceX;
      break;
    case 'xxl':
      margin = spaceXL;
      break;
    case 'xxxl':
      margin = spaceXL * 2;
      break;
    default:
      margin = Space;
      break;
  }

  return <View style={{ [styleProperty]: margin }} />;
}
