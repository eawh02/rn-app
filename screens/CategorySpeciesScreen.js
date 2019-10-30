import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, DINOSAURS } from "../data/data";

const CategorySpeciesScreen = props => {
  const renderDinosaur = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
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
