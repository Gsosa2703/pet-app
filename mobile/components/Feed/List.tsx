import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CardFeed from './Card';
import { FeedPet } from '../../interfaces/FeedPet';

const pets: FeedPet[] = [
  {
    id: '1',
    images: [
      'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
      'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
      'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
    ],
    posterName: 'Shelter A',
    posterImage: 'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
    description: 'Adorable kitten looking for a loving home!',
    name: 'Whiskers',
    breed: 'Siamese Cat',
    age: '2 years',
  },
  {
    id: '2',
    images: [
      'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
      'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
      'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
    ],
    posterName: 'John Doe',
    posterImage: 'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
    description: 'This playful pup is ready to join your family.',
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '6 months',
  },
  {
    id: '3',
    images: [
      'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
      'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
      'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
    ],
    posterName: 'John Doe',
    posterImage: 'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
    description: 'This playful pup is ready to join your family.',
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '6 months',
  },
];

const Feed: React.FC = () => {
  return (
    <View style={styles.container}>
    <FlatList
      data={pets}
      renderItem={({ item }) => (
        <CardFeed
          id={item.id}
          images={item.images}
          posterImage={item.posterImage}
          posterName={item.posterName}
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
