// Routes
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "./Account";



/**
 * Account Stack
 */
export default function AccountStack() {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Account"
          component={Account}
        />
      </Stack.Navigator>
    );
}