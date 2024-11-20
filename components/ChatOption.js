import React, { Component, useState } from 'react';
import { StyleSheet, View, Pressable, Text, Dimensions } from 'react-native';
import { Link } from 'expo-router';

const windowsWidth = Dimensions.get('window').width
const windowsHeight = Dimensions.get('window').height

export default function ChatOption({ label }) {
  return (
    // <View style={styles.chatOptionContainer}>
      <View style={styles.chatOption}>
        <Pressable onPress={() => alert('TODO: this button goes to their profile')}>
          <Text style={{ color: 'red', fontSize: 16, }}>{label}</Text>
        </Pressable>
      </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  // chatOptionContainer: {
  //   boxSizing: 'border-box',
  // },
  chatOption: {
    // marginVertical: 20,
    // marginHorizontal: (windowsWidth / 2) - (windowsHeight / 20),
    // width: windowsHeight / 10,
    // height: windowsHeight / 10,
    // backgroundColor: 'blue',
    // borderRadius: windowsHeight / 5,

    backgroundColor: 'white',
    height: '350px',
    width: '120px',
    // borderRadius: '50%',
    boxShadow: '10px 10px rgba(0,0,0,0.2)',
  },
});
