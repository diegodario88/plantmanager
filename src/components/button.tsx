import React from 'react';
import { TouchableOpacity, Text, TextStyle } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonProps {
  title?: string;
  titleFontSize?: number;
  titleMarginTop?: number;
  titleColor?: string;
  height: number | string;
  width: number | string;
  icon?: JSX.Element;
  onPress?: () => void;
}

export default function Button(props: ButtonProps): JSX.Element {
  const {
    height,
    width,
    title,
    titleFontSize,
    icon,
    titleMarginTop,
    titleColor,
    onPress,
  } = props;

  return (
    <TouchableOpacity style={styles.button(height, width)} onPress={onPress}>
      <Text
        style={styles.title(
          titleFontSize ?? 0,
          titleMarginTop ?? 0,
          titleColor ?? colors.heading
        )}
      >
        {title}
      </Text>
      {icon}
    </TouchableOpacity>
  );
}

const styles = {
  button: (height: number | string, width: number | string): TextStyle => ({
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: height,
    width: width,
  }),
  title: (
    fontSize: number,
    marginTop: number,
    titleColor: string
  ): TextStyle => ({
    fontSize: fontSize,
    marginTop: marginTop,
    color: titleColor,
    fontFamily: fonts.heading,
  }),
};
