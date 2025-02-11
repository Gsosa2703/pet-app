import React, { useState } from 'react';
import { View, Image, FlatList, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';
import ImageViewing from 'react-native-image-viewing';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Media} from '../../interfaces/Media';

const { width } = Dimensions.get('window');

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

  return (
    <View style={styles.container}>
      <FlatList
        data={media}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleOpenViewer(index)} style={styles.mediaItem}>
            <Image source={{ uri: item.uri }} style={styles.thumbnail} />
            {item.type === 'video' && (
              <View style={styles.playIcon}>
                <Icon name="play-circle-fill" size={40} color="white" />
              </View>
            )}
          </TouchableOpacity>
        )}
      />

      {/* Fullscreen Image Viewer */}
      <Modal visible={visible} transparent>
      <ImageViewing
          images={media.filter((m) => m.type === 'image').map((m) => ({ uri: m.uri }))}
          imageIndex={selectedIndex}
          visible={visible}
          onRequestClose={() => setVisible(false)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mediaItem: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  thumbnail: {
    width: width / 2 - 20,
    height: 150,
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
