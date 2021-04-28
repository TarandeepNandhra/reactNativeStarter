import React, { useReducer } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import ColourCounter from "../components/ColourCounter"

const COLOUR_INCREMENT = 15;

// defined outside so not mixed up with state within SquareScreen - convention.
// action - how to change state object
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number };
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: +-15}
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state 
        : {...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state 
        : {...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state 
        : {...state, blue: state.blue + action.payload };
    default:
      return state;
  }
  // In every scenario we return a state.
};

const SquareScreen = () => { 

  // state is initally { red: 0, green: 0, blue: 0 }
  // dispatch runs the reducer with an action parameter
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
        <ColourCounter 
          onIncrease={() => dispatch({ type: 'change_red', payload: COLOUR_INCREMENT })}
          onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOUR_INCREMENT })}
          colour="Red"
        />
        <ColourCounter 
          colour="Green"
          onIncrease={() => dispatch({ type: 'change_green', payload: COLOUR_INCREMENT })}
          onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOUR_INCREMENT })}
        />
        <ColourCounter 
          colour="Blue"
          onIncrease={() => dispatch({ type: 'change_blue', payload: COLOUR_INCREMENT })}
          onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOUR_INCREMENT })}
        />
        <View 
          style={{ 
            height: 200, 
            width: 200, 
            backgroundColor: `rgb(${state.red},${state.green},${state.blue})` 
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

// Before reducer, using useState hook

/*
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
*/