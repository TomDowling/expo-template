import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";



/**
 * Export
 */
export function useLoadResources() {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    ...Feather.font,
                    "space-mono": require("../../assets/fonts/SpaceMono-Regular.ttf"),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setIsLoading(false);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

  return isLoading;
}
