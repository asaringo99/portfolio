'use client'

import React from "react";
import HeaderNav from '@/ui/header'
import CursorCircle from "@/ui/cursor-circle";
import FollowingCircle from "@/ui/following-cursor";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="cursor-none">
      <CursorCircle/>
      <FollowingCircle/>
      <div className="bg-white flex flex-col overflow-hidden pb-10">
        <div className="w-full fixed z-40">
          <HeaderNav/>
        </div>
        <div className="flex-grow overflow-y-auto overflow-x-hidden">{children}</div>
      </div>
    </div>
  )
}