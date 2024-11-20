import React, { Component, useState } from 'react';
import { StyleSheet, View, Pressable, Text, Dimensions } from 'react-native';
import { Link } from 'expo-router';

const windowsWidth = Dimensions.get('window').width
const windowsHeight = Dimensions.get('window').height

export default function ProfilePic() {
  return (
    <View style={styles.profilePicContainer}>
      <Pressable onPress={() => alert('TODO: this button goes to their profile')}>
        <Text style={{ color: 'red', fontSize: 16, }}>your match's face goes here</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePicContainer: {
    marginVertical: 20,
    marginHorizontal: (windowsWidth / 2) - (windowsHeight / 20),
    width: windowsHeight / 10,
    height: windowsHeight / 10,
    backgroundColor: 'blue',
    borderRadius: windowsHeight / 5,
  },
});
