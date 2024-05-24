import React from "react";
import { getInitials } from "@reactive-resume/utils";
import { useUser } from "../services/user";

type Props = {
  size?: number;
  className?: string;
};

export const UserAvatar: React.FC<Props> = ({ size = 36, className }) => {
  const { user } = useUser();

  // If user is not available, return null
  if (!user) return null;

  // Determine the content of the avatar based on whether user has a picture
  const content = user.picture ? (
    // Render user picture if available
    <img
      alt={user.name}
      src={user.picture}
      className="rounded-full"
      style={{ width: size, height: size }}
    />
  ) : (
    // Otherwise, render user initials
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-secondary text-center text-[10px] font-semibold text-secondary-foreground"
    >
      {getInitials(user.name)}
    </div>
  );

  // Render the avatar container with optional className
  return <div className={className}>{content}</div>;
};
