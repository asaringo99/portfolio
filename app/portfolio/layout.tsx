import React from "react";
import HeaderNav from '@/ui/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white flex flex-col overflow-hidden pb-10">
      <div className="w-full fixed z-50">
        <HeaderNav/>
      </div>
      <div className="flex-grow overflow-y-auto overflow-x-hidden">{children}</div>
    </div>
  )
}