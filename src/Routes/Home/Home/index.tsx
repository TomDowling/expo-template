import { Text, View } from "react-native";

// Constants
import { Theme } from "../../../Constants";



/**
 * Default Export
 */
export default function Home() {
    return (
        <View style={{ padding: Theme.spacing.default}}>
            <Text>Home</Text>
        </View>
    )
}