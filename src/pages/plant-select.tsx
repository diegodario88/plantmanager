import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import EnvironmentButton from '../components/environment-button';
import Header from '../components/header';
import PlantCardPrimary from '../components/plant-card-primary';
import api from '../services/api';

interface Environments {
  key: string;
  title: string;
}
interface Plants {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelect(): JSX.Element {
  const [environments, setEnvironments] = React.useState<Environments[]>([]);
  const [environmentSelected, setEnvironmentSelected] = React.useState('all');
  const [plants, setPlants] = React.useState<Plants[]>([]);
  const [filteredPlants, setFilteredPlants] = React.useState<Plants[]>([]);

  const handleEnvironmentSelection = (key: string): void => {
    setEnvironmentSelected(key);
    if (key === 'all') {
      setFilteredPlants(plants);
      return;
    }

    const funnel = plants.filter((plant) => plant.environments.includes(key));

    setFilteredPlants(funnel);
  };

  React.useEffect(() => {
    async function fetchEnvironment(): Promise<void> {
      const { data } = await api.get(
        'plants_environments?_sort=title&_order=asc'
      );
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

  React.useEffect(() => {
    async function fetchPlants(): Promise<void> {
      const { data } = await api.get('plants?_sort=name&_order=asc');
      setPlants(data);
    }

    // eslint-disable-next-line no-void
    void fetchPlants();
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
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item?.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelection(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
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
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
});
export default PlantSelect;
