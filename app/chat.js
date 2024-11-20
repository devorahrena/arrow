import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, Dimensions } from 'react-native';
import { Link } from 'expo-router';

import Button from '../components/Button';
import ImageViewer from '../components/ImageViewer';
import ProfilePic from '../components/ProfilePic';
import ChatOption from '../components/ChatOption';

const cloudySky = require('../assets/chat_background.jpg')
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function Conversation() {
  return (
    <ImageBackground source={cloudySky} resizeMode="cover" style={styles.image}>
      <ProfilePic style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }} />
      <Text style={styles.baseText}>
        <Text style={styles.theirMessage}>{'Hey!\n'}</Text>
        <Text style={styles.yourMessage}>{'How are you?\n'}</Text>
        <Text style={styles.theirMessage}>{'Doing good!\n'}</Text>
      </Text>
      <ChatOption label={'generate date'}/>
      <ChatOption label={'video chat'}/>
      <ChatOption label={'generate prompt'}/>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    height: windowHeight,
    width: windowWidth,
  },
  baseText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  theirMessage: {
    textAlign: 'left',
  },
  yourMessage: {
    textAlign: 'right',
  }
});
