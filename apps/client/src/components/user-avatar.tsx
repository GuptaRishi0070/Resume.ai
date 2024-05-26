import React from "react";
import { getInitials } from "@reactive-resume/utils";
import { useUser } from "../services/user";

type Props = {
  size?: number;
  className?: string;
};

export const UserAvatar: React.FC<Props> = ({ size = 36, className }) => {
  const { user } = useUser();

  if (!user) return null;

  const avatarContent = user.picture ? (
    <img
      alt={user.name}
      src={user.picture}
      className={`rounded-full ${className}`}
      style={{ width: size, height: size }}
    />
  ) : (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-full bg-secondary text-center text-[10px] font-semibold text-secondary-foreground ${className}`}
    >
      {getInitials(user.name)}
    </div>
  );

  return avatarContent;
};
