import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
  active?: boolean;
}

export function PlantCardPrimary({
  data,
  ...rest
}: PlantCardPrimaryProps): JSX.Element {
  return (
    <RectButton style={[styles.container]} {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <View>
        <Text style={[styles.text]}>{data.name}</Text>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10,
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    fontSize: 17,
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});

export default PlantCardPrimary;
