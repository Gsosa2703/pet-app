import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CardFeed from './Card';
import { FeedPet } from '../../interfaces/FeedPet';
import { pets } from '../../data/pets'

const Feed: React.FC = () => {
  return (
    <View style={styles.container}>
    <FlatList
      data={pets}
      renderItem={({ item }) => (
        <CardFeed
          id={item.id}
          images={item.images}
          shelter={item.shelter}
          owner={item.owner}
          description={item.description}
          name={item.name}
          breed={item.breed}
          age={item.age}
        />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the FlatList takes up the full screen height
    backgroundColor: '#fff',
    padding: 16,
  },
});

export default Feed;
