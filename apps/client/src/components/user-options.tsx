import { t } from "@lingui/macro"; // Importing translation function from @lingui/macro
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  KeyboardShortcut,
} from "@reactive-resume/ui"; // Importing UI components from @reactive-resume/ui
import { useNavigate } from "react-router-dom"; // Importing navigation hook from react-router-dom

import { useLogout } from "../services/auth"; // Importing custom logout hook

type Props = {
  children: React.ReactNode; // Defining type for props, expecting a single prop 'children' of type React.ReactNode
};

export const UserOptions = ({ children }: Props) => {
  const navigate = useNavigate(); // Initializing navigate function for navigation
  const { logout } = useLogout(); // Destructuring logout function from custom hook

  const handleSettingsClick = () => {
    try {
      navigate("/dashboard/settings"); // Navigate to the settings page
    } catch (error) {
      console.error("Failed to navigate to settings:", error);
    }
  };

  const handleLogoutClick = () => {
    try {
      logout(); // Perform logout action
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <DropdownMenu>
      {/* Trigger for the dropdown menu */}
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      {/* Content of the dropdown menu */}
      <DropdownMenuContent side="top" align="start" className="w-48">
        {/* Menu item for navigating to settings */}
        <DropdownMenuItem onClick={handleSettingsClick}>
          {t`Settings`} {/* Localized text for 'Settings' */}
          {/* Displaying keyboard shortcut for settings */}
          <KeyboardShortcut>⇧S</KeyboardShortcut>
        </DropdownMenuItem>
        
        {/* Separator line in the dropdown menu */}
        <DropdownMenuSeparator />

        {/* Menu item for logging out */}
        <DropdownMenuItem onClick={handleLogoutClick}>
          {t`Logout`} {/* Localized text for 'Logout' */}
          {/* Displaying keyboard shortcut for logout */}
          <KeyboardShortcut>⇧Q</KeyboardShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
