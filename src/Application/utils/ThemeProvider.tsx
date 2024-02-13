import { useAtom } from 'jotai';
import * as store from './JotaiStore';


const ThemeProvider = () => {
  const [theme,] = useAtom(store.themePreferences);

  if (theme) {
    // Clair
    document.body.style.setProperty("--body-bg-color", "#f0ebdd");
    document.body.style.setProperty("--font-color", "#111111");
    document.body.style.setProperty("--inverted-font-color", "#f3f1e2");
    document.body.style.setProperty("--invert-filter", "invert(1)");
    document.body.style.setProperty("--light-grey", "#e9e2bf");
    document.body.style.setProperty("--light-grey-hover", "#dfd5a7");
  } else {
    // Sombre
    document.body.style.setProperty("--body-bg-color", "#35332e");
    document.body.style.setProperty("--font-color", "#f3f1e2");
    document.body.style.setProperty("--inverted-font-color", "#111111");
    document.body.style.setProperty("--invert-filter", "invert(0)");
  }

  return null;
};
 
export default ThemeProvider;
