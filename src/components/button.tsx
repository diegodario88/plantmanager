import React from 'react';
import { TouchableOpacity, Text, TextStyle } from 'react-native';
import colors from '../../styles/colors';

interface ButtonProps {
  title?: string;
  titleFontSize?: number;
  titleMarginTop?: number;
  height: number;
  width: number;
  icon: JSX.Element;
}

export default function Button(props: ButtonProps): JSX.Element {
  const { height, width, title, titleFontSize, icon, titleMarginTop } = props;

  return (
    <TouchableOpacity style={styles.button(height, width)}>
      <Text style={styles.title(titleFontSize ?? 0, titleMarginTop ?? 0)}>
        {title}
      </Text>
      {icon}
    </TouchableOpacity>
  );
}

const styles = {
  button: (height: number, width: number): TextStyle => ({
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: height,
    width: width,
  }),
  title: (fontSize: number, marginTop: number): TextStyle => ({
    fontSize: fontSize,
    marginTop: marginTop,
    color: colors.heading,
  }),
};
