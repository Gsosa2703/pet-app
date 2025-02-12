import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdoptionList from './pages/AdoptionList';
import PetProfile from './pages/AnimalProfile';
import {Animal} from './interfaces/Animal/Animal'

export type RootStackParamList = {
  AdoptionList: undefined;
  PetProfile: { pet: Animal }; // Define route params for PetProfile
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
