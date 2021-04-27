import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen"
import ListScreen from "./src/screens/ListScreen"
import ListScreenExercise from "./src/screens/ListScreenExercise"

const navigator = createStackNavigator(
  {
    // Options for StackNavigator to show user
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ListExercise: ListScreenExercise
  },
  {
    // Initial is the name of the first route
    initialRouteName: "ListExercise",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
