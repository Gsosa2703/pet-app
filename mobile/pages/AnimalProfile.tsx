import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // <-- Using Ionicons
import { RouteProp, useNavigation  } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import DonationsTab from '../components/AnimalProfile/DonationTab';
import MediaTab from '../components/AnimalProfile/MediaTab';
import HistoryTab from '../components/AnimalProfile/HistoryTab';
import { Shelter } from '../interfaces/Shelter';

const Tab = createMaterialTopTabNavigator();

type PetProfileRouteProp = RouteProp<RootStackParamList, 'PetProfile'>;

type FeedScreenNavigationProp = {
  navigate: (screen: string, params: { shelter?: Shelter }) => void;
};

interface Props {
  route: PetProfileRouteProp;
}

const PetProfile: React.FC<Props> = ({ route }) => {
  const { pet } = route.params;
  const navigation = useNavigation<FeedScreenNavigationProp>();


  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={{ uri: pet.images[0].uri }} style={styles.petProfileImage} />

        {/* Shelter Info */}
        {pet.shelter && <View style={styles.shelterContainer}>
          <TouchableOpacity style={styles.shelterButton}
              onPress={() => navigation.navigate('ShelterProfile', { shelter: pet.shelter })}
          >
            <Image source={{ uri: pet.shelter?.profileImage }} style={styles.shelterImage} />
            <Text style={styles.shelterName}>{pet.shelter.name}</Text>
          </TouchableOpacity>
        </View> }

        {/* Favorite & Share Icons */}
        <View style={styles.actionIcons}>
          <TouchableOpacity>
            <Icon name="heart-outline" size={28} color="red" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="share-outline" size={28} color="#555" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Pet Info & Donation Section */}
      <View style={styles.infoSection}>
        <Text style={styles.name}>{pet.name} <Icon name="male" size={16} color="#0093E9" /></Text>
        <Text style={styles.breed}>{pet.breed} • {pet.age}</Text>
        <Text style={styles.donationCount}>{pet.donations.length} Donations</Text>

        {/* Donate & Sponsor Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.donateButton}>
            <Text style={styles.buttonText}>Donate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sponsorButton}>
            <Text style={styles.buttonText}>Sponsor</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs Section with Icons Instead of Labels */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarShowLabel: false, // Hide text labels
          tabBarIndicatorStyle: { backgroundColor: '#4caf50' },
          tabBarIcon: ({ color, focused }) => {
            let iconName: string;

            if (route.name === "History") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "Media") {
              iconName = focused ? "images" : "images-outline";
            } else if (route.name === "Donations") {
              iconName = focused ? "cash" : "cash-outline";
            } else {
              iconName = ''
            }

            return <Icon name={iconName} size={24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Media">{() => <MediaTab media={pet.images} />}</Tab.Screen>
        <Tab.Screen name="History">{() => <HistoryTab history={pet.history} />}</Tab.Screen>
        <Tab.Screen name="Donations">{() => <DonationsTab donations={pet.donations} />}</Tab.Screen>
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
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    position: 'relative',
  },
  petProfileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  shelterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  shelterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shelterImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  shelterName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  actionIcons: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 20,
    gap: 16,
  },
  infoSection: {
    padding: 16,
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  breed: {
    fontSize: 16,
    color: '#666',
  },
  donationCount: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 12,
  },
  donateButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sponsorButton: {
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

export default PetProfile;
