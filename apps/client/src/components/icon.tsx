import { useTheme } from "@reactive-resume/hooks";
import { cn } from "@reactive-resume/utils";

type Props = {
  size?: number;
  className?: string;
};

export const Icon = ({ size = 32, className }: Props) => {
  const { isDarkMode } = useTheme();

  // Set the base path for the icon images
  const basePath = "/icon/";

  // Determine the filename based on dark mode status
  const filename = isDarkMode ? "light.svg" : "dark.svg";

  // Construct the complete image source URL
  const src = `${basePath}${filename}`;

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
