import React from "react";
import { cabin, viga } from "@/ui/font";

export default function Start() {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-900">
      <div className={`h-1/2 text-6xl flex flex-col items-center justify-end w-full text-white animate-focus-in-contract-bck ${viga.className}`}>
        Force is Power
      </div>
      <div className="h-1/2 flex flex-col items-center justify-end w-full">
        <div className="h-28 p-8 border rounded-full text-slate-50 border-white">
          <div className="animate-drop-fade-out border-2 p-1 h-4 bg-white rounded-full"></div>
        </div>
        <div className={`text-white p-8 ${cabin.className}`}>
          Scrool Down
        </div>
      </div>
    </div>
  )
}