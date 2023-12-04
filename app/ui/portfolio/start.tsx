import React from "react";
import { cabin, viga } from "@/ui/font";

export default function Start() {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-900">
      <div className={`h-1/2 text-2xl md:text-6xl flex flex-col items-center justify-end w-full text-white animate-focus-in-contract-bck ${viga.className}`}>
        Force is Power
      </div>
      <div className="h-1/2 flex flex-col items-center justify-end w-full">
        <div className="h-14 p-4 md:h-28 md:p-8 border rounded-full text-slate-50 border-white">
          <div className="animate-drop-fade-out border-2 h-2 p-0.5 md:p-1 md:h-4 bg-white rounded-full"></div>
        </div>
        <div className={`text-white p-8 ${cabin.className}`}>
          Scrool Down
        </div>
      </div>
    </div>
  )
}