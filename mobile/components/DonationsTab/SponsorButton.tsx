import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SponsorButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isSponsor, setIsSponsor] = useState(false);

  const handleSponsor = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSponsor(!isSponsor);
    }, 1500);
  };

  return (
    <TouchableOpacity style={[styles.button, isSponsor ? styles.sponsored : styles.notSponsored]} onPress={handleSponsor}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          <Icon name={isSponsor ? 'check-circle' : 'favorite'} size={20} color="#fff" />
          <Text style={styles.buttonText}>{isSponsor ? 'Sponsored' : 'Sponsor'}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
  },
  notSponsored: {
    backgroundColor: '#4caf50',
  },
  sponsored: {
    backgroundColor: '#ff9800',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default SponsorButton;
