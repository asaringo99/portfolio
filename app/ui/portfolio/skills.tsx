import Title from "@/ui/portfolio/title";
import React from "react";
import DoughnutChartWrapper from "@/ui/portfolio/doughnut-chart-wrapper";
import fetchSkills from "@/lib/data/skills";
import Image from "next/image";

export default function Skills() {
  const data = fetchSkills()

  return (
    <div className="h-fit flex flex-col items-center justify-center bg-gradient-to-b from-teal-700 to-emerald-300">
      <div className="h-1/3 p-4 md:p-28 flex items-center text-white">
        <Title title="Skills"/>
      </div>
      <div className="h-2/3 w-full flex justify-center flex-wrap px-12 md:px-20 2xl:px-52 md:pb-20">
        {data.map((d) => {
          return (
            <li key={d.name} className="h-16 w-16 m-2 md:h-28 md:w-28 md:m-8 shadow-2xl flex items-center justify-center bg-emerald-100 ring-1 ring-purple-900 transition-all ease-in-out duration-400 rounded-3xl hover:bg-rose-400 hover:-translate-y-4 hover:scale-125 hover:rounded-full hover:ring-0 cursor-pointer hover:cursor-none">
              <Image
                className="absolute object-center h-8 w-8 md:h-12 md:w-12"
                src={d.uri}
                height="100"
                width="100"
                alt={d.name}
              />
              <DoughnutChartWrapper name={d.name} percent={d.percent} />
            </li>
          )
        })}
      </div>
    </div>
  )
}