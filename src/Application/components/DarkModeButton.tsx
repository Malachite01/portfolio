import React from "react";
import { useAtom } from "jotai";
import * as store from "../utils/JotaiStore";
// img
import darkMode from "../../img/dark-mode.svg";
import lightMode from "../../img/light-mode.svg";

const DarkModeButton = () => {
  const [theme, SetTheme] = useAtom(store.themePreferences);

  return (
    <>
      <button
        className="dark-mode-button"
        onClick={() => {
          SetTheme(!theme);
        }}
      >
        {theme 
          ? <img src={lightMode} alt="light mode"/>
          : <img src={darkMode} alt="dark mode"/>
        }
      </button>
    </>
  );
}
 
export default DarkModeButton;