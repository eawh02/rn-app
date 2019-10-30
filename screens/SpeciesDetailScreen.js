import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SpeciesDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Species Details Screen</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
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
