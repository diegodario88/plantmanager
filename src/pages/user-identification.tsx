import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Button from '../components/button';

export function Identification(): JSX.Element {
  const [username, setUsername] = useState<string>();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const navigation = useNavigation();

  const handleConfirmation = (): void => navigation.navigate('Confirmation');

  const handleInputBlur = (): void =>
    isFilled ? setIsFocused(true) : setIsFocused(false);

  const handleInputFocus = (): void => setIsFocused(true);

  const handleInputChange = (value: string): void => {
    setIsFilled(value.length > 0);
    setUsername(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <Text style={styles.emoji}>{isFilled ? '😉' : '🤔'}</Text>
              <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                selectionColor={colors.green}
                value={username}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={handleInputChange}
              />
              <View style={styles.footer}>
                <Button
                  height={56}
                  width={'100%'}
                  title={'Confirmar'}
                  titleFontSize={16}
                  titleColor={colors.white}
                  onPress={handleConfirmation}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 40,
  },
});
