import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import OverviewTab from '../components/ShelterProfile/OverviewTab';
import AnimalsTab from '../components/ShelterProfile/AnimalsTab';
import DonationsTab from '../components/AnimalProfile/DonationTab';

const Tab = createMaterialTopTabNavigator();

type ShelterProfileRouteProp = RouteProp<RootStackParamList, 'ShelterProfile'>;

interface Props {
  route: ShelterProfileRouteProp;
}

const ShelterProfile: React.FC<Props> = ({ route }) => {
  const { shelter } = route.params;

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={{ uri: shelter.profileImage }} style={styles.shelterLogo} />

        {/* Shelter Name & Location */}
        <Text style={styles.shelterName}>{shelter.name}</Text>
        <Text style={styles.shelterLocation}>
          📍 {shelter.location} | 🔗 {shelter.website}
        </Text>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.donateButton}>
            <Text style={styles.buttonText}>Donate</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs with Icons */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false, // Hide text labels
          tabBarIndicatorStyle: { backgroundColor: '#4caf50' },
          tabBarIcon: ({ color, focused }) => {
            let iconName: string = '';

            if (route.name === 'Overview') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'Animals') {
              iconName = focused ? 'paw' : 'paw-outline';
            } else if (route.name === 'Donations') {
              iconName = focused ? 'cash' : 'cash-outline';
            } 

            return <Icon name={iconName} size={24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Overview">{() => <OverviewTab overview={shelter.overview} />}</Tab.Screen>
        <Tab.Screen name="Animals">{() => <AnimalsTab animals={shelter.animals} />}</Tab.Screen>
        <Tab.Screen name="Donations">{() => <DonationsTab donations={shelter.donations} />}</Tab.Screen>
        {/* <Tab.Screen name="Team">{() => <TeamTab team={shelter.team} />}</Tab.Screen> */}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  shelterLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  shelterName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  shelterLocation: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 12,
  },
  followButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  donateButton: {
    backgroundColor: '#ff9800',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ShelterProfile;
