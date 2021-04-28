import React, {useState} from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const ColourCounter = (props) => {
  // ({ colour, onIncrease, onDecrease }) using destructuring
  return (
    <View>
        <Text>{props.colour}</Text>
        <Button 
          title={`Increase ${props.colour}`} 
          onPress={props.onIncrease}
        />
        <Button 
          title={`Decrease ${props.colour}`}
          onPress={props.onDecrease}
         />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ColourCounter;


