import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const StarrySky = require('./assets/arrow_background.jpeg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={StarrySky} />
      </View>
      <Text style={{ color: '#fff'}}>
        Hi Diogene this is the title screen feel free to make it pretty!
      </Text>
      <View style={styles.footerContainer}>
        <Button label="log in" />
        <Button label="create account" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
