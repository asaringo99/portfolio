import React from "react";
import HeaderNav from '@/ui/portfolio/header'
import { cabin } from "@/ui/font";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white flex flex-col overflow-hidden pb-10">
      <div className="w-full fixed z-50">
        <HeaderNav/>
      </div>
      <div className="flex-grow overflow-y-auto">{children}</div>
    </div>
  )
}