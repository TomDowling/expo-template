import { atom, selector } from "recoil";



/**
 * ATOM: User Data
 */
export const atom_userData = atom({
    key: "atom_userData",
    default: {
        // Remove when you add actual auth validation
        test: true
    }
})