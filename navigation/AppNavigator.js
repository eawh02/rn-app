import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategorySpeciesScreen from "../screens/CategorySpeciesScreen";
import SpeciesDetailScreen from "../screens/SpeciesDetailScreen";
import Colors from "../constants/Colors";

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

export default createAppContainer(AppNavigator);
