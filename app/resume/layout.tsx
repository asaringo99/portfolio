import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white flex h-screen flex-col">
      {children}
    </div>
  )
}