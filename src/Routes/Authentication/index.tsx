// Routes
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";



/**
 * Authentication Stack
 */
export default function AuthStack() {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    );
}