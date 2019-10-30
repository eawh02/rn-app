import {
  createStackNavigator,
  createAppContainer
} from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategorySpeciesScreen from "../screens/CategorySpeciesScreen";
import SpeciesDetailScreen from "../screens/SpeciesDetailScreen";

const AppNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategorySpecies: CategorySpeciesScreen,
  SpeciesDetail: SpeciesDetailScreen
});

export default createAppContainer(AppNavigator);
