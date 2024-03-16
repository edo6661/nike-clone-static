"use client";
import { logout } from "@/actions/auth";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const FormLogout = () => {
  const onLogout = () => logout();
  return (
    <Button variant="destructive" onClick={onLogout}>
      Logout Client
    </Button>
  );
};

export default FormLogout;
