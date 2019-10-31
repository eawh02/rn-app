import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Platform } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategorySpeciesScreen from "../screens/CategorySpeciesScreen";
import SpeciesDetailScreen from "../screens/SpeciesDetailScreen";
import Colors from "../constants/Colors";
import FavouritesScreen from "../screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";

const AppNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategorySpecies: {
      screen: CategorySpeciesScreen
    },
    SpeciesDetail: SpeciesDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }
  }
);

const DinoFavTabNavigator = createBottomTabNavigator(
  {
    Dinosaurs: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-paw" size={25} color={tabInfo.tintColor} />
          );
        }
      }
    },
    Favourites: {
      screen: FavouritesScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  }
);

export default createAppContainer(DinoFavTabNavigator);
