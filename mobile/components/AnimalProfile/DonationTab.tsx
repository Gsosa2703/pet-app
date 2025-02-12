import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DonationCard from './DonationCard';
import SponsorButton from './SponsorButton';
import {Donation} from '../../interfaces/Animal/Donation';

interface DonationsTabProps {
  donations: Donation[];
}


const DonationsTab: React.FC<DonationsTabProps> = ({ donations }) => {
  return ( donations && 
    <View style={styles.container}>
      {donations.length > 0 ? (
        <FlatList
          data={donations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DonationCard {...item} />}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.noDonations}>No donations have been made yet.</Text>
      )}

      <SponsorButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  noDonations: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
    marginTop: 20,
  },
});

export default DonationsTab;
