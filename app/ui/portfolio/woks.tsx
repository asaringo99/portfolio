import Title from "@/ui/portfolio/title";
import React from "react";
import fetchWorks from "@/lib/data/works";
import Image from "next/image";
import { dosis, novasquare } from "@/ui/font";

export default function Works() {
  const data = fetchWorks()

  return (
    <div className="h-fit flex flex-col items-center justify-center bg-gradient-to-b from-emerald-300 to-rose-300">
      <div className="h-1/3 p-28 flex items-center text-white">
        <Title title="Works"/>
      </div>
      <div className="h-2/3 w-full flex justify-center flex-wrap px-20 pb-20">
        {data.map((d) => {
          return (
            <li key={d.name} className="flex flex-col items-center justify-center p-8 text-black">
              <div className={`p-4 text-2xl ${novasquare.className}`}>
                {d.name}
              </div>
              <Image
                className="h-80 w-auto cursor-pointer hover:cursor-none transition duration-300 hover:-translate-y-2"
                src={d.uri}
                height="500"
                width="500"
                alt={d.name}
              />
              <div className="p-4">
                {d.description.en}
              </div>
            </li>
          )
        })}
      </div>
    </div>
  )
}