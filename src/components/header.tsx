import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import userImg from '../assets/avatarDiego.png';
import fonts from '../../styles/fonts';

interface HeaderProps {
  userName: string;
}
export function Header({ userName }: HeaderProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetings}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image style={styles.image} source={userImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
  },
  greetings: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
export default Header;
