import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen"
import ListScreen from "./src/screens/ListScreen"
import ListScreenExercise from "./src/screens/ListScreenExercise"
import ImageScreen from "./src/screens/ImageScreen"
import CounterScreen from "./src/screens/CounterScreen"
import ColourScreen from "./src/screens/ColourScreen"
import SquareScreen from "./src/screens/SquareScreen"
import TextScreen from "./src/screens/TextScreen"

const navigator = createStackNavigator(
  {
    // Options for StackNavigator to show user
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ListExercise: ListScreenExercise,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colour: ColourScreen,
    Square: SquareScreen,
    Text: TextScreen
  },
  {
    // Initial is the name of the first route
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
