// Routes
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";



/**
 * Home Stack
 */
export default function HomeStack() {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    );
}