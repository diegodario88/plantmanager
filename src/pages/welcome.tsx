import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import wateringImg from '../assets/watering.png';
import Button from '../components/button';

export function Welcome(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas {'\n'} de forma fácil
      </Text>
      <Image source={wateringImg} style={styles.image} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidados de lembrar você,
        sempre que precisar.
      </Text>
      <Button
        icon={<Ionicons name="md-arrow-redo-outline" size={32} color="green" />}
        height={46}
        width={86}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    width: 292,
    height: 294,
  },
});
