import React, { Component } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';


export default class Match extends Component {
  render() {
    return (
      <View style={styles.matchContainer}>
        <Pressable style={styles.match} onPress={() => alert('You pressed a match.')}>
          {/* <Text style={styles.matchLabel}>{label}</Text> */}
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  matchContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    color: 'white',
  },
  match: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    color: 'white',
  },
  matchIcon: {
    paddingRight: 8,
  },
  matchLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
