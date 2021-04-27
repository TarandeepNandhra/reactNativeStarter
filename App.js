import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen"

const navigator = createStackNavigator(
  {
    // Options for StackNavigator to show user
    Home: HomeScreen,
    Components: ComponentsScreen
  },
  {
    // Initial is the name of the first route
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
