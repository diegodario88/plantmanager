import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Button from '../components/button';

export function Confirmation(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😀</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar de suas plantinhas com muito cuidado
        </Text>
        <View style={styles.footer}>
          <Button
            height={56}
            width={'100%'}
            title={'Confirmar'}
            titleFontSize={16}
            titleColor={colors.white}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 22,
    lineHeight: 38,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.text,
    paddingHorizontal: 20,
  },
  footer: {
    width: '100%',
    paddingTop: 30,
    paddingHorizontal: 50,
  },
});
