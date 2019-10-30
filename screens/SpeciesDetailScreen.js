import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SpeciesDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Species Details Screen</Text>
    </View>
  );
};

export default SpeciesDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
