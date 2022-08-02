import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// Routes
import Routes from "./Routes";

// State
import { RecoilRoot } from "recoil";

// Hooks
import {
    useLoadResources
} from "./Hooks";



/**
 * Default Export
 */
export default function App() {
    const isLoading = useLoadResources();

    if (isLoading) return null;

    return (
        <RecoilRoot>
            <SafeAreaProvider>
                <Routes />
                <StatusBar />
            </SafeAreaProvider>
        </RecoilRoot>
    );
}