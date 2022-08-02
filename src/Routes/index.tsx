import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";

// Routes
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountStack from "./Account";
import AuthStack from "./Authentication";
import HomeStack from "./Home";

// State
import { useRecoilValue } from "recoil";
import { atom_userData } from "../State";

// Constants
import { Theme } from "../Constants";

// Helpers
import { isEmpty } from "../Helpers";



/**
 * Default Export
 */
export default function Routes() {
    const Tab = createBottomTabNavigator();
    const userData = useRecoilValue(atom_userData);

    return (
        <NavigationContainer>
            {isEmpty(userData) ? (
                <AuthStack />
            ) : (
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName;
                            
                            if (route.name === "Home") {
                                iconName = "home"
                            } else if (route.name === "Account") {
                                iconName = "user"
                            }
                            
                            return <AntDesign name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: Theme.colours.client.primary,
                        tabBarInactiveTintColor: Theme.colours.greys.dark,
                    })}
                    >
                    <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
                    <Tab.Screen name="Account" component={AccountStack} options={{ headerShown: false }} />
                </Tab.Navigator>
            )}
        </NavigationContainer>
    )
}