import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PaginationProps {
  length: number;
  currentIndex: number;
}

const Pagination: React.FC<PaginationProps> = ({ length, currentIndex }) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, currentIndex === index && styles.activeDot]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'black',
    width: 10,
    height: 10,
  },
});

export default Pagination;
