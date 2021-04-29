import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// props from the stack naviagtor.
const HomeScreen = (props) => {
// const HomeScreen = ({ navigation }) => {      ---> destructuring, only accessing the navigation part of props (navigation.navigate)
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button 
        title="Go to list Demo"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button 
        onPress={() => props.navigation.navigate("Image")}
        title="Go to Image Screen"
      />
      <Button 
        onPress={() => props.navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button 
        onPress={() => props.navigation.navigate("Colour")}
        title="Go to Colour Demo"
      />
      <Button 
        onPress={() => props.navigation.navigate("Square")}
        title="Go to Square Demo"
      />
      <Button 
        onPress={() => props.navigation.navigate("Text")}
        title="Go to TextScreen Demo"
      />
      <Button 
        onPress={() => props.navigation.navigate("Box")}
        title="Go to BoxScreen Demo"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("ListExercise")}>
        {/* Anything in here will be touchable */}
        <Text>Go to List Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
