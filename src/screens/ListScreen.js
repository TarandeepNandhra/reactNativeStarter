import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" }
  ]

  // FlatList is better than mapping the array with RN.
  // Keys must be unique and a string.
  // can def in arry obj or keyextractor.

  return (
    <React.Fragment>
    <Text>List Screen</Text>
    <FlatList
      // Scroll horizontally through the list.
      horizontal
      // Hide the scroll bar on the bottom
      showsHorizontalScrollIndicator={false}
      
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // element === { item: {name:friend...}, index: 0 }
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
    </React.Fragment>

  ); 
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;

