import React from "react";
import { CloudSun, Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "@reactive-resume/hooks";
import { Button } from "@reactive-resume/ui";
import { motion } from "framer-motion";

type Props = {
  size?: number;
};

export const ThemeSwitch: React.FC<Props> = ({ size = 20 }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button size="icon" variant="ghost" onClick={toggleTheme}>
      {/* Container for the switch */}
      <div className="cursor-pointer overflow-hidden" style={{ width: size, height: size }}>
        {/* Motion animation for the icons */}
        <motion.div
          // Define animation properties based on the current theme
          animate={{ x: theme === "light" ? 0 : theme === "system" ? -size : -2 * size }}
          // Define spring animation for smoother transitions
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="flex"
        >
          {/* Conditional rendering of icons based on the current theme */}
          {theme === "light" && <Sun size={size} className="shrink-0" />}
          {theme === "system" && <CloudSun size={size} className="shrink-0" />}
          {theme === "dark" && <Moon size={size} className="shrink-0" />}
        </motion.div>
      </div>
    </Button>
  );
};
