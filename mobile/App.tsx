import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './components/Feed/List';
import PetProfile from './pages/PetPage';
import { enableScreens } from 'react-native-screens';
enableScreens();
export type RootStackParamList = {
  Feed: undefined;
  PetProfile: { pet: any }; // Define route params for PetProfile
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen
                  name="PetProfile"
                  component={PetProfile}
                  options={{ title: 'Pet Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
