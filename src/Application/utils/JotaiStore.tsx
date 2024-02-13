import { atomWithDefault } from "jotai/utils";

// Atom used to store the theme preferences
export const themePreferences = atomWithDefault<boolean>(() => true);