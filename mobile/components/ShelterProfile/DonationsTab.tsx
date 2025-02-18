import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface Props {
  donations: { name: string; amount: number }[];
}

const DonationsTab: React.FC<Props> = ({ donations }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={donations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.donationText}>{item.name} donated ${item.amount}</Text>
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
  donationText: {
    fontSize: 16,
    color: '#333',
  },
});

export default DonationsTab;
