import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from "react-native-reanimated-carousel";
import Pagination from './Pagination';

const { width: screenWidth } = Dimensions.get('window');

interface PetCarouselProps {
  images: string[];
}

const PetCarousel: React.FC<PetCarouselProps> = ({ images }) => {
 const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View 	id="carousel-component"   >
      {/* Carousel Component */}
      <Carousel
        loop={true}
        width={screenWidth}
        height={300}
        snapEnabled={true}
        pagingEnabled={true}
        autoPlayInterval={2000}
        data={images}
        onSnapToItem={(index) => setCurrentIndex(index)}
        style={{ width: "100%" }}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item }} style={styles.petImage} />
          </View>
        )}
      />

      
    <Pagination length={images.length} currentIndex={currentIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  petImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
});

export default PetCarousel;
