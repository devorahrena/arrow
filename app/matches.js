import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { Link } from 'expo-router';

import Button from '../components/Button';
import ImageViewer from '../components/ImageViewer';
import Match from '../components/Match'

const StarrySky = require('../assets/arrow_background.jpeg');

export default function Matches() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff'}}>
        matches go here
      </Text>

      <Match/>
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
