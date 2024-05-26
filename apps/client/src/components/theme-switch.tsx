import React from "react";
import { CloudSun, Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "@reactive-resume/hooks";
import { Button } from "@reactive-resume/ui";

export const ThemeSwitch = ({ size = 20 }) => {
  const { theme, toggleTheme } = useTheme();
  const Icon = themeIcons[theme];

  return (
    <Button size="icon" variant="ghost" onClick={toggleTheme}>
      <Icon size={size} className="shrink-0" />
    </Button>
  );
};

const themeIcons = {
  light: Sun,
  system: CloudSun,
  dark: Moon
};
