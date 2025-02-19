import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CardFeed from '../components/Feed/Card';
import { pets } from '../data/pets'
import { useNavigation } from '@react-navigation/native';
import { Animal } from '../interfaces/Animal/Animal';

type FeedScreenNavigationProp = {
  navigate: (screen: string, params: { pet: Animal }) => void;
};

const Feed: React.FC = () => {
  const navigation = useNavigation<FeedScreenNavigationProp>();

  return (
    <View style={styles.container}>
    <FlatList
      data={pets}
      renderItem={({ item }) => (
        <CardFeed
          pet={item}
          onNavigateToProfile={() => navigation.navigate('PetProfile', { pet: item })}
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
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});

export default Feed;
