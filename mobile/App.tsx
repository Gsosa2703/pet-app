// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdoptionList from './app/pages/AdoptionList';
import PetProfile from './app/pages/AnimalProfile';
import ShelterProfile from './app/pages/ShelterProfile';
import LoginScreen from './app/pages/Login';
import { Animal } from './app/interfaces/Animal/Animal';
import { Shelter } from './app/interfaces/Shelter';

export type RootStackParamList = {
  Login: undefined;
  AdoptionList: undefined;
  PetProfile: { pet: Animal };
  ShelterProfile: { shelter: Shelter };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AdoptionList" component={AdoptionList} />
        <Stack.Screen name="PetProfile" component={PetProfile} options={{ title: 'Pet Profile' }} />
        <Stack.Screen name="ShelterProfile" component={ShelterProfile} options={{ title: 'Shelter Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
