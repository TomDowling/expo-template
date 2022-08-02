


/**
 * Defaults
 */
let defaultSpacing = 16



/**
 * Export
 */
export const Theme = {
    colours: {
        basic: {
            black: "#000000",
            white: "#FFFFFF"
        },
        greys: {
            default: "#E8E8E8",
            dark:"#7A7A7A"
        },
        client: {
            primary: "#FF0000",
            secondary: "#00FF00"
        }
    },
    spacing: {
        small: defaultSpacing / 2,
        default: defaultSpacing,
        large: defaultSpacing * 1.5,
        extraLarge: defaultSpacing * 2
    }
}