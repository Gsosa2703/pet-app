import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdoptionList from './pages/AdoptionList';
import PetProfile from './pages/AnimalProfile';
import ShelterProfile from './pages/ShelterProfile';
import {Animal} from './interfaces/Animal/Animal'
import {Shelter} from './interfaces/Shelter'

export type RootStackParamList = {
  AdoptionList: undefined;
  PetProfile: { pet: Animal };
  ShelterProfile: { shelter: Shelter };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdoptionList">
        <Stack.Screen name="AdoptionList" component={AdoptionList} />
        <Stack.Screen
                  name="PetProfile"
                  component={PetProfile}
                  options={{ title: 'Pet Profile' }} />
        <Stack.Screen
                  name="ShelterProfile"
                  component={ShelterProfile}
                  options={{ title: 'Shelter Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
