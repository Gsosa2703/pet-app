import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MasonryList from 'react-native-masonry-list';
import { useNavigation } from '@react-navigation/native';
import { Animal } from '../../interfaces/Animal/Animal';

type FeedScreenNavigationProp = {
 navigate: (screen: string, params: { pet: Animal }) => void;
};

interface Props {
  animals: Animal[];
}

const AnimalsTab: React.FC<Props> = ({ animals }) => {
  const navigation = useNavigation<FeedScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <MasonryList
        data={animals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('PetProfile', { pet: item })}
          >
            <Image source={{ uri: item.uri }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>{item.breed} • {item.age}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: '#fff',
    elevation: 3, // Adds a subtle shadow effect
  },
  image: {
    width: '100%',
    height: 200, // Ensure a uniform height for images
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
});

export default AnimalsTab;
