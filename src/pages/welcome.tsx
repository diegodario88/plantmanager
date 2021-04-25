import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import colors from '../../styles/colors';
import wateringImg from '../assets/watering.png';
import Button from '../components/button';
import fonts from '../../styles/fonts';

export function Welcome(): JSX.Element {
  const navigation = useNavigation();

  const handleStart = (): void => navigation.navigate('Identification');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Text>
        <Image source={wateringImg} style={styles.image} />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidados de lembrar você,
          sempre que precisar.
        </Text>
        <Button
          onPress={handleStart}
          icon={
            <Ionicons name="md-arrow-redo-outline" size={32} color="green" />
          }
          height={46}
          width={86}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 34,
    marginTop: 38,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
});
