import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Import child into the parent
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      {/* Since we made the component, we can use whatever prop names we want */}
      <ImageDetail title="Forest" imageScore="9" imageSource={require('../../assets/forest.jpg')}/>
      <ImageDetail title="Beach" imageScore="7" imageSource={require('../../assets/beach.jpg')}/>
      <ImageDetail title="Mountain" imageScore="4" imageSource={require('../../assets/mountain.jpg')}/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ImageScreen;