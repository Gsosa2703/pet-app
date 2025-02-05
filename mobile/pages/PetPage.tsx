import React from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type PetProfileRouteProp = RouteProp<RootStackParamList, 'PetProfile'>;

interface Props {
  route: PetProfileRouteProp;
}

const PetProfile: React.FC<Props> = ({ route }) => {
  const { pet } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: pet.images[0] }} style={styles.petImage} />

      <Text style={styles.name}>🐾 {pet.name}</Text>
      <Text style={styles.breed}>Breed: {pet.breed}</Text>
      <Text style={styles.age}>Age: {pet.age}</Text>
      <Text style={styles.description}>{pet.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  petImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 8,
  },
  breed: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  age: {
    fontSize: 18,
    color: '#555',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});

export default PetProfile;
