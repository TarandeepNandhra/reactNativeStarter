import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      {/* On ios autocapitalised and autocorrect is default */}
      <Text style={styles.header}>Enter Password:</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="none" // sentences, words, characters as well
        autoCorrect={false}
        value={name}
        onChangeText={(newText) => setName(newText)}
      />
      { name.length < 6 ? <Text>Password must be longer than 5 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginLeft: 20,
    width: 300,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 30
  },
  header: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 30
  }
});

export default TextScreen;


// Text input example before exercise

/*
<View>
  <Text>Enter Name:</Text>
  <TextInput 
    style={styles.input}
    autoCapitalize="none" // sentences, words, characters as well
    autoCorrect={false}
    value={name}
    onChangeText={(newText) => setName(newText)}
  />
  <Text>My name is {name}</Text>
  { false ? <Text>That was true</Text> : null}
</View>
*/