import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import EnvironmentButton from '../components/environment-button';
import Header from '../components/header';
import api from '../services/api';

interface Environments {
  key: string;
  title: string;
}

export function PlantSelect(): JSX.Element {
  const [environments, setEnvironments] = React.useState<Environments[]>([]);

  React.useEffect(() => {
    async function fetchEnvironment(): Promise<void> {
      const { data } = await api.get('plants_environments');
      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    }

    // eslint-disable-next-line no-void
    void fetchEnvironment();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header userName="Diego Dario" />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>Você irá colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => <EnvironmentButton title={item?.title} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20,
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
export default PlantSelect;
