'use client'

import LoginForm from "@/components/Login/LoginForm";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
      <main className="flex items-center justify-center h-[100vh]">
        <LoginForm />
      </main>
  );
}
