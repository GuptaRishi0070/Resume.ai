import React, { useEffect } from "react";
import { useTheme } from "@reactive-resume/hooks";
import { cn } from "@reactive-resume/utils";

type Props = {
  size?: number;
  className?: string;
};

export const Logo: React.FC<Props> = ({ size = 32, className }) => {
  const { isDarkMode } = useTheme();

  // Update the body's class based on the dark mode status
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <img
      src={isDarkMode ? "/logo/dark.svg" : "/logo/light.svg"}
      width={size}
      height={size}
      alt="Reactive Resume"
      className={cn("rounded-sm", className)}
    />
  );
};
