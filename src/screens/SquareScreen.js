import React, {useState} from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import ColourCounter from "../components/ColourCounter"

const COLOUR_INCREMENT = 15;

const SquareScreen = () => {
  const[red, setRed] = useState(0);
  const[green, setGreen] = useState(0);
  const[blue, setBlue] = useState(0);

  // Polymorphic version of the bodged way below.
  // Works out quite nicely as helper method is a lot clearer + abstracts the logic
  const setColour = (colour, change) => {
    // colour === 'red', 'green', 'blue'
    // change === +- 15

    switch (colour) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
        <ColourCounter 
          onIncrease={() => setColour('red', COLOUR_INCREMENT)}
          onDecrease={() => setColour('red', -COLOUR_INCREMENT)}
          colour="Red"
          
          />
        <ColourCounter 
          colour="Green"
          onIncrease={() => setColour('green', COLOUR_INCREMENT)}
          onDecrease={() => setColour('green', -COLOUR_INCREMENT)}
        />
        <ColourCounter 
          colour="Blue"
          onIncrease={() => setColour('blue', COLOUR_INCREMENT)}
          onDecrease={() => setColour('blue', -COLOUR_INCREMENT)}
        />
        <View 
          style={{ 
            height: 200, 
            width: 200, 
            backgroundColor: `rgb(${red},${green},${blue})` 
            }} 
        />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SquareScreen;

// Bodged way to fix values below 0 and above 255:
// V difficult to read + code will not be DRY.
/*
// <ColourCounter 
onIncrease={() => {
  if (red > 255 - COLOUR_INCREMENT) {
    return;
    
  }
  setRed(red + COLOUR_INCREMENT)
}}
onDecrease={() => {
  if (red < 0 + COLOUR_INCREMENT) {
    return
  }
  setRed(red - COLOUR_INCREMENT)
}}
colour="Red"
/>
*/