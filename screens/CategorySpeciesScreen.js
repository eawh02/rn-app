import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, DINOSAURS } from "../data/data";
import DinosaurItem from "../components/DinosaurItem";
import Dinosaur from "../models/dinosaur";

const CategorySpeciesScreen = props => {
  const renderDinosaur = itemData => {
    return (
      <DinosaurItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "SpeciesDetail",
            params: {
              dinosaurId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  const categoryId = props.navigation.getParam("categoryId");

  const displayedDinosaurs = DINOSAURS.filter(
    dinosaur => dinosaur.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedDinosaurs}
        keyExtractor={(item, index) => item.id}
        renderItem={renderDinosaur}
        style={{ width: "90%" }}
      />
    </View>
  );
};

CategorySpeciesScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId
  );

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategorySpeciesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
