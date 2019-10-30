import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategorySpeciesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Species Screen</Text>
    </View>
  );
};

export default CategorySpeciesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
