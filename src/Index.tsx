import * as Expo from "expo";

// Components
import App from "./App";



/**
 * Default Export
 */
function Index() {
    return (
        <App />
    )
}

export default Expo.registerRootComponent(Index);