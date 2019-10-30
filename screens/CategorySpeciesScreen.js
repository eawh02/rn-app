import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategorySpeciesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Species Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate("SpeciesDetail");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
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
