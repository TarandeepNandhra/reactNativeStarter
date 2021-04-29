import React, {useReducer} from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {

  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}></View>
      <View style={styles.textTwoStyle}></View>
      <View style={styles.textThreeStyle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    height: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  textOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'rgb(255,0,0)',

  },
  textTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'rgb(0,255,0)',
    top: 100,
  },
  textThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'rgb(0,0,255)',
  }
});

export default BoxScreen;