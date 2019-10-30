import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to species"
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategorySpecies"
          });
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
