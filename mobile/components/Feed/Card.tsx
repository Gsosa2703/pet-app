import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { Animal } from '../../interfaces/Animal/Animal';
import Carousel from './CarouselCard';
import { useNavigation } from '@react-navigation/native';
import { Shelter } from '../../interfaces/Shelter';

interface CardFeedProps {
  pet: Animal; 
  onNavigateToProfile: () => void;
}

type FeedScreenNavigationProp = {
  navigate: (screen: string, params: { shelter: Shelter }) => void;
};

const CardFeed: React.FC<CardFeedProps> = ({
  pet : { id, images, shelter, name, breed, age },
  onNavigateToProfile,
}) => {
    const navigation = useNavigation<FeedScreenNavigationProp>();
  
  return (
    <View style={styles.card}>
      {/* Poster Info */}
      <View style={styles.posterInfo}>
          <TouchableOpacity 
                      onPress={() => navigation.navigate('ShelterProfile', { shelter: shelter })}>
        <Image source={{ uri:  shelter?.profileImage || "" }} style={styles.posterImage} />
        <Text style={styles.posterName}>{ shelter?.name || ""} </Text>
        </TouchableOpacity>
      </View>

      {/* Carousel for Pet Images */}
      <Carousel images={images.map((value) => value.uri)} />

       {/* Share and Favorite Buttons */}
       <View style={styles.additionalActions}>

        {/* Profile Pet Button */}
        <TouchableOpacity style={styles.iconButton} onPress={onNavigateToProfile}>
          <Icon name="paw-outline" size={20} color="#666" />
        </TouchableOpacity>

        {/* Favorite Button */}
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="heart-outline" size={20} color="#666" />
        </TouchableOpacity>

        {/* Share Button */}
          <TouchableOpacity style={styles.iconButton}>
          <Icon name="share-social-outline" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Pet Details */}
      <View style={styles.details}>
        <Text style={styles.name}>🐾 {name}</Text>
        <Text style={styles.breed}>🐶 {breed}</Text>
        <Text style={styles.age}>🎂 {age}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>

        {/* Adopt Button */}
        <TouchableOpacity style={styles.minimalButton}>
          <Icon name="heart-circle-outline" size={20} color="#4caf50" />
          <Text style={styles.buttonText}>Adopta</Text>
        </TouchableOpacity>

        {/* Donate Button */}
        { shelter && (
          <TouchableOpacity style={styles.minimalButton}>
            <Icon name="rocket-outline" size={20} color="#ff5722" />
            <Text style={styles.buttonText}>Dona</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  posterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  posterImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  posterName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  carousel: {
    height: 200,
    marginBottom: 12,
  },
  petImage: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginRight: 8,
  },
  details: {
    marginBottom: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  breed: {
    fontSize: 16,
    color: '#555',
  },
  age: {
    fontSize: 16,
    color: '#555',
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  minimalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  buttonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  additionalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  iconButton: {
    marginHorizontal: 8,
    padding: 4,
  },
});

export default CardFeed;
