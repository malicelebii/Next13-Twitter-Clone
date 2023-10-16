"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="p-2 border bg-blue-300 rounded-full w-1/2"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
