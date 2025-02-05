import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Feed from './components/Feed/List';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Feed />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
