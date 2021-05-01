import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({
  title,
  active = false,
  ...rest
}: EnvironmentButtonProps): JSX.Element {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}
    >
      <View>
        <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5,
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});

export default EnvironmentButton;
