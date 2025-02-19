import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AnimalHistory} from '../../interfaces/Animal/History';

interface HistoryTabProps {
  history: AnimalHistory;
}


const HistoryTab: React.FC<HistoryTabProps> = ({ history }) => {
  return ( history && 
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Rescue Story */}
      <View style={styles.section}>
        <Icon name="paw" size={24} color="#4caf50" />
        <Text style={styles.sectionTitle}>Rescue Story</Text>
        <Text style={styles.content}>{history.rescueStory}</Text>
      </View>

      {/* Likes & Dislikes */}
      <View style={styles.section}>
        <Icon name="heart" size={24} color="#ff4081" />
        <Text style={styles.sectionTitle}>What I Love ❤️</Text>
        {history.likes.length > 0 ? (
          history.likes.map((like, index) => <Text key={index} style={styles.listItem}>• {like}</Text>)
        ) : (
          <Text style={styles.content}>No specific likes noted.</Text>
        )}
      </View>

      <View style={styles.section}>
        <Icon name="emoticon-sad-outline" size={24} color="#ff9800" />
        <Text style={styles.sectionTitle}>What I Dislike 😖</Text>
        {history.dislikes.length > 0 ? (
          history.dislikes.map((dislike, index) => <Text key={index} style={styles.listItem}>• {dislike}</Text>)
        ) : (
          <Text style={styles.content}>No specific dislikes noted.</Text>
        )}
      </View>

      {/* Health Information */}
      <View style={styles.section}>
        <Icon name="hospital-box-outline" size={24} color="#0093E9" />
        <Text style={styles.sectionTitle}>Health & Vaccination 🏥</Text>
        <Text style={styles.listItem}>
          {history.health.isVaccinated ? '✅ Vaccinated' : '⚠️ Not Vaccinated'}
        </Text>
        <Text style={styles.listItem}>
          {history.health.hasIllness ? `⚕️ Illness: ${history.health.hasIllness}` : '✔️ No known illnesses'}
        </Text>
        <Text style={styles.listItem}>
          {history.health.isCastrated ? '✂️ Castrated/Neutered' : '⚠️ Not Castrated'}
        </Text>
      </View>

      {/* Compatibility */}
      <View style={styles.section}>
        <Icon name="home-heart" size={24} color="#795548" />
        <Text style={styles.sectionTitle}>Compatibility 🏡</Text>
        <Text style={styles.listItem}>
          {history.compatibility.withDogs ? '✅ Can live with dogs' : '🚫 Not good with dogs'}
        </Text>
        <Text style={styles.listItem}>
          {history.compatibility.withCats ? '✅ Can live with cats' : '🚫 Not good with cats'}
        </Text>
        <Text style={styles.listItem}>
          {history.compatibility.withKids ? '✅ Good with kids' : '🚫 Not recommended for kids'}
        </Text>
      </View>

      {/* Adoption Notes */}
      <View style={styles.section}>
        <Icon name="clipboard-text-outline" size={24} color="#673ab7" />
        <Text style={styles.sectionTitle}>Adoption Notes 📝</Text>
        <Text style={styles.content}>{history.adoptionNotes}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    color: '#555',
  },
  listItem: {
    fontSize: 14,
    color: '#333',
    paddingVertical: 2,
  },
});

export default HistoryTab;
