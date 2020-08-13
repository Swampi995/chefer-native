import React from 'react';
import { Text, StyleSheet } from 'react-native';
import * as basicStyles from '../basic/styles';

type Colors = 'dark' | 'light' | 'blue' | 'yellow' | 'red' |
  'green' | 'paleBlue' | 'paleYellow' | 'paleRed' | 'paleGreen';

interface TextBoldProps {
  label: string | number;
  bold?: boolean;
  color?: Colors;
  size?: number;
}

export function CustomText({ label, size = 18, bold = false, color = 'light' }: TextBoldProps) {
  return (
    <Text style={styles(size, bold, color).text}>
      {label}
    </Text>
  );
}

const getColor = (color?: Colors) => {
  switch (color) {
    case 'dark': return basicStyles.TEXT_DARK;
    case 'light': return basicStyles.TEXT_LIGHT;
    case 'blue': return basicStyles.ACCENT_BLUE;
    case 'yellow': return basicStyles.ACCENT_YELLOW;
    case 'red': return basicStyles.ACCENT_RED;
    case 'green': return basicStyles.ACCENT_GREEN;
    case 'paleBlue': return basicStyles.PALE_BLUE;
    case 'paleYellow': return basicStyles.PALE_YELLOW;
    case 'paleRed': return basicStyles.PALE_RED;
    case 'paleGreen': return basicStyles.PALE_GREEN;
  }
}

const styles = (size: number, bold: boolean, color?: Colors) =>
 StyleSheet.create({
  text: {
    color: getColor(color),
    fontSize: size,
    fontFamily: bold ? 'Roboto-Bold' : 'Roboto-Medium',
  }
});
