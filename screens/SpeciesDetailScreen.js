import React from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  Button
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DINOSAURS } from "../data/data";
import { CustomHeaderButton } from "../components/HeaderButton";

const SpeciesDetailsScreen = props => {
  const dinosaurId = props.navigation.getParam("dinosaurId");

  const selectedDinosaur = DINOSAURS.find(
    dinosaur => dinosaur.id === dinosaurId
  );

  console.log("selected dinosaur", selectedDinosaur);

  return (
    <ScrollView>
      <Image source={{ uri: selectedDinosaur.imageUrl }} style={styles.image} />
      <View>
        <Text style={styles.title}>Facts</Text>
        <Text style={styles.description}>{selectedDinosaur.description}</Text>
      </View>
    </ScrollView>
  );
};

SpeciesDetailsScreen.navigationOptions = navigationData => {
  const dinosaurId = navigationData.navigation.getParam("dinosaurId");
  const selectedDinosaur = DINOSAURS.find(
    dinosaur => dinosaur.id === dinosaurId
  );
  return {
    headerTitle: selectedDinosaur.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => {
            console.log("mark as favourite!!");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  },
  description: {
    margin: 30,
    padding: 10,
    fontFamily: "open-sans"
  }
});

export default SpeciesDetailsScreen;
