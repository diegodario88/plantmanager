import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../../styles/colors';
import { Welcome } from '../pages/welcome';
import { Identification } from '../pages/user-identification';
import { Confirmation } from '../pages/confirmation';
import PlantSelect from '../pages/plant-select';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen name="Identification" component={Identification} />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
    <stackRoutes.Screen name="PlantSelect" component={PlantSelect} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
