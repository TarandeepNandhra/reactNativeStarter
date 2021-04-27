// Step 1: Import libraries we need for comp
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//  Step 2: Create comp - function which returns some jsx (JS XML - kinda like html)
const ComponentsScreen = () => {
  const name = "Taran";

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.otherText}>My name is {name}</Text>
    </View>
  );
};

// <Text style={{ fontSize: 30 }}>This is the component's screen</Text>  ---> can pass in a JS object inline.
// babel turns JSX into JS, jsx elements get turned into React function calls

// Step 3: Stylesheet

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  otherText: {
    fontSize: 20
  }
});

// Step 4: export comp to be used elsewhere

export default ComponentsScreen;