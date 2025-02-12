import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Donation} from '../../interfaces/Animal/Donation'


const DonationCard: React.FC<Donation> = ({ user, amount, message, timestamp }) => {
  return (
    <View style={styles.card}>
      {/* Profile Section */}
      <View style={styles.header}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
      </View>

      {/* Donation Message */}
      <Text style={styles.message}>{message}</Text>

      {/* Donation Amount */}
      <View style={styles.donationInfo}>
        <Icon name="volunteer-activism" size={20} color="#ff5722" />
        <Text style={styles.amount}>${amount.toFixed(2)} donated</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#777',
  },
  message: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
  },
  donationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  amount: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff5722',
  },
});

export default DonationCard;
