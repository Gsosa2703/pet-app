import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

interface Props {
  team: { name: string; role: string; image: string }[];
}

const TeamTab: React.FC<Props> = ({ team }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={team}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.member}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name} - {item.role}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  member: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default TeamTab;
