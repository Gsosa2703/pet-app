import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import MasonryList from "react-native-masonry-list";
import ImageViewing from 'react-native-image-viewing';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Media } from '../../interfaces/Media';

interface MediaTabProps {
  media: Media[];
}

const MediaTab: React.FC<MediaTabProps> = ({ media }) => {
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenViewer = (index: number) => {
    setSelectedIndex(index);
    setVisible(true);
  };

  
  return(
    <View style={styles.container}>

        <MasonryList
          images={media.map((media) => ({ uri: media.uri }))}
          extraData={media.length} 
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleOpenViewer(index)} style={styles.mediaItem}>
              <Image source={{ uri: item.uri }} style={styles.dynamicImage} />
            </TouchableOpacity>
          )}
        />

      {/* Fullscreen Image Viewer */}
      <Modal visible={visible} transparent>
      <ImageViewing
        visible={visible}
        images={media.filter((m: Media) => m.type === 'image').map((m: Media) => ({ uri: m.uri }))}
        imageIndex={selectedIndex}
        onRequestClose={() => setVisible(false)}
      />
      </Modal>
    </View>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mediaItem: {
    marginBottom: 8,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  dynamicImage: {
    width: '100%', // Ensures images resize dynamically
    aspectRatio: 1, // Let the MasonryList calculate height dynamically
    borderRadius: 10,
  },
  playIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
    opacity: 0.8,
  },
});

export default MediaTab;
