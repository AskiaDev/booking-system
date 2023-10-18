import React from "react";
import ButtonIcon from "./ButtonIcon";
import { BsMoon, BsSun } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <BsMoon /> : <BsSun />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
