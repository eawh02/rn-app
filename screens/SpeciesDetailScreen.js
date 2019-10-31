import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { DINOSAURS } from "../data/data";

const SpeciesDetailsScreen = props => {
  const dinosaurId = props.navigation.getParam("dinosaurId");

  const selectedDinosaur = DINOSAURS.find(
    dinosaur => dinosaur.id === dinosaurId
  );

  console.log("selected dinosaur", selectedDinosaur);

  return (
    <View style={styles.screen}>
      <Text>{selectedDinosaur.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

SpeciesDetailsScreen.navigationOptions = navigationData => {
  const dinosaurId = navigationData.navigation.getParam("dinosaurId");
  const selectedDinosaur = DINOSAURS.find(
    dinosaur => dinosaur.id === dinosaurId
  );
  return {
    headerTitle: selectedDinosaur.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SpeciesDetailsScreen;
