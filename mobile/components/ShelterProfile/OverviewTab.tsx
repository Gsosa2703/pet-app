import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { OverviewShelter } from '../../interfaces/Shelter';
interface OverviewProps {
 overview: OverviewShelter
}

const OverviewTab: React.FC<OverviewProps> = ({overview}) => {
 const { mission, founded, rescuedCount, shelterCount, goals } = overview
  return (
    <View style={styles.container}>
      {/* Mission Section */}
      <View style={styles.section}>
        <Icon name="heart-circle" size={28} color="#ff6f61" />
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.text}>{mission}</Text>
      </View>

      {/* Founded Info & Stats */}
      <View style={styles.section}>
        <Icon name="calendar-month" size={28} color="#4caf50" />
        <Text style={styles.sectionTitle}>Founded</Text>
        <Text style={styles.text}>{founded}</Text>
      </View>

      <View style={styles.statsContainer}>
        {/* Dogs Rescued */}
        <View style={styles.statCard}>
          <Icon name="paw" size={40} color="#f4a261" />
          <Text style={styles.statNumber}>{rescuedCount}+</Text>
          <Text style={styles.statLabel}>Dogs Rescued</Text>
        </View>

        {/* Dogs in Shelter */}
        <View style={styles.statCard}>
          <Icon name="home-heart" size={40} color="#2a9d8f" />
          <Text style={styles.statNumber}>{shelterCount}</Text>
          <Text style={styles.statLabel}>Currently in Shelter</Text>
        </View>
      </View>

      {/* Goals Section */}
      <View style={styles.section}>
        <Icon name="bullseye-arrow" size={28} color="#007bff" />
        <Text style={styles.sectionTitle}>Goals for the Next 3 Months</Text>
        {goals.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Icon name="check-circle" size={20} color="#009688" />
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 8, color: '#333' },
  text: { fontSize: 16, color: '#555', marginTop: 4 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  statCard: { alignItems: 'center', backgroundColor: '#f9f9f9', padding: 12, borderRadius: 10, flex: 1, marginHorizontal: 5 },
  statNumber: { fontSize: 24, fontWeight: 'bold', color: '#333', marginVertical: 4 },
  statLabel: { fontSize: 14, color: '#666' },
  goalItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 6 },
  goalText: { fontSize: 16, color: '#333', marginLeft: 8 },
});

export default OverviewTab;
