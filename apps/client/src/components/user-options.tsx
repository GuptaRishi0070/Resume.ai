import { t } from "@lingui/macro";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, KeyboardShortcut } from "@reactive-resume/ui";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../services/auth";

export const UserOptions = ({ children }: { children: React.ReactNode }) => {
  const navigateToSettings = useNavigateToSettings();
  const handleLogout = useHandleLogout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent side="top" align="start" className="w-48">
        <SettingsMenuItem navigate={navigateToSettings} />
        <DropdownMenuSeparator />
        <LogoutMenuItem handleLogout={handleLogout} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// Custom hook to navigate to settings page
const useNavigateToSettings = () => {
  const navigate = useNavigate();
  
  return () => navigate("/dashboard/settings");
};

// Custom hook to handle logout action
const useHandleLogout = () => {
  const { logout } = useLogout();
  
  return logout;
};

// Component for settings menu item
const SettingsMenuItem = ({ navigate }: { navigate: () => void }) => (
  <DropdownMenuItem onClick={navigate}>
    {t`Settings`}
    <KeyboardShortcut>⇧S</KeyboardShortcut>
  </DropdownMenuItem>
);

// Component for logout menu item
const LogoutMenuItem = ({ handleLogout }: { handleLogout: () => void }) => (
  <DropdownMenuItem onClick={handleLogout}>
    {t`Logout`}
    <KeyboardShortcut>⇧Q</KeyboardShortcut>
  </DropdownMenuItem>
);
