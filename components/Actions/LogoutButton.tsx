"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <Button onClick={handleLogout} variant="destructive">
      Logout
    </Button>
  );
};
