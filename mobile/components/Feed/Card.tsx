import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Use MaterialIcons for icons
import { FeedPet } from '../../interfaces/FeedPet';

const CardFeed: React.FC<FeedPet> = ({
  images,
  posterImage,
  posterName,
  description,
  name,
  breed,
  age,
}) => {
  return (
    <View style={styles.card}>
      {/* Poster Info */}
      <View style={styles.posterInfo}>
        <Image source={{ uri: posterImage }} style={styles.posterImage} />
        <Text style={styles.posterName}>{posterName}</Text>
      </View>

      {/* Carousel for Pet Images */}
      <ScrollView horizontal pagingEnabled style={styles.carousel}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.petImage} />
        ))}
      </ScrollView>

       {/* Share and Favorite Buttons */}
       <View style={styles.additionalActions}>

        {/* Favorite Button */}
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="favorite-border" size={20} color="#666" />
        </TouchableOpacity>

        {/* Share Button */}
          <TouchableOpacity style={styles.iconButton}>
          <Icon name="share" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Pet Details */}
      <View style={styles.details}>
        <Text style={styles.name}>🐾 {name}</Text>
        <Text style={styles.breed}>🐶 {breed}</Text>
        <Text style={styles.age}>🎂 {age}</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Action Buttons */}
      <View style={styles.actions}>
        {/* Adopt Button */}
        <TouchableOpacity style={styles.minimalButton}>
          <Icon name="pets" size={20} color="#4caf50" />
          <Text style={styles.buttonText}>Adopta</Text>
        </TouchableOpacity>

        {/* Donate Button */}
        <TouchableOpacity style={styles.minimalButton}>
          <Icon name="volunteer-activism" size={20} color="#ff5722" />
          <Text style={styles.buttonText}>Dona</Text>
        </TouchableOpacity>
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
