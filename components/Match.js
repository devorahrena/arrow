import React, { Component, useState } from 'react';
import { StyleSheet, View, Pressable, Text, Dimensions } from 'react-native';
import { Link } from 'expo-router';


const halfWindowsWidth = Dimensions.get('window').width / 2
const halfWindowsHeight = Dimensions.get('window').height / 2


export default function Match() {
  // return <Text>hi i am a match</Text>
  return (
    <View style={styles.matchContainer}>
      <Link style={styles.matchLabel} href="/../chat">I'm your perfect match - tap me!</Link>

      {/* <Pressable style={styles.match} onPress={() => alert('You pressed a match.')}>
        <Text style={styles.matchLabel}>I'm your perfect match - click me!</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  matchContainer: {
    width: halfWindowsWidth,
    height: halfWindowsHeight,
    // marginHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: halfWindowsHeight/3,
    marginHorizontal: halfWindowsWidth/3,
    backgroundColor: 'blue',
  },
  match: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  matchIcon: {
    paddingRight: 8,
  },
  matchLabel: {
    color: 'red',
    fontSize: 16,
  },
});
