import React from "react";
import { useTheme } from "@reactive-resume/hooks";
import { cn } from "@reactive-resume/utils";

type Props = {
  size?: number;
  className?: string;
};

export const Logo: React.FC<Props> = ({ size = 32, className }) => {
  // Destructure the isDarkMode property directly from the useTheme() hook
  const { isDarkMode } = useTheme();

  // Define the source of the image based on the isDarkMode value
  const src = isDarkMode ? "/logo/dark.svg" : "/logo/light.svg";

  return (
    <img
      src={src}
      width={size}
      height={size}
      alt="Reactive Resume"
      className={cn("rounded-sm", className)}
    />
  );
};
