
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import DonationsTab from '../components/DonationsTab/index';
import MediaTab  from '../components/MediaTab/index'
// Tabs Screens
const HistoryTab = ({ pet }: { pet: any }) => (
  <View style={styles.tabContainer}>
    <Text>{pet.history || 'No history available.'}</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();

type PetProfileRouteProp = RouteProp<RootStackParamList, 'PetProfile'>;

interface Props {
  route: PetProfileRouteProp;
}

const PetProfile: React.FC<Props> = ({ route }) => {
  const { pet } = route.params;

  return (
    <View style={styles.container}>
      {/* Header with Image */}
      <View style={styles.header}>
        <Image source={{ uri: pet.images[0].uri }} style={styles.petImage} />
        <TouchableOpacity style={styles.favoriteButton}>
          <Icon name="favorite-border" size={24} color="#f55" />
        </TouchableOpacity>
      </View>

      {/* Pet Info */}
      <View style={styles.infoCard}>
        <Text style={styles.name}>
          {pet.name} <Icon name="male" size={16} color="#0093E9" />
        </Text>
        <Text style={styles.breed}>{pet.breed} • {pet.age}</Text>
      </View>

      {/* Tabs */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarIndicatorStyle: { backgroundColor: '#4caf50' },
        }}
      >
        <Tab.Screen name="History">
          {() => <HistoryTab pet={pet} />}
        </Tab.Screen>
        <Tab.Screen name="Media">
          {() => <MediaTab media={pet.images} />}
        </Tab.Screen>
        <Tab.Screen name="Donations">
          {() => <DonationsTab />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    position: 'relative',
  },
  petImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    elevation: 2,
  },
  infoCard: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  breed: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  mediaImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
});

export default PetProfile;

