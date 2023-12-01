import Title from "@/ui/portfolio/title";
import React from "react";
import PopUpText from "@/ui/portfolio/popup-text";
import { caveat, dosis, satisfy } from "@/ui/font";

export default function AboutMe() {

  const PopUpTexts = (props: {leftText: string, rightText: string}) => {
    const { leftText, rightText } = props;
    return (
      <div className="w-full flex flex-col items-center">
        <div className="p-3 md:p-6 flex flex-row items-center w-full">
          <div className="w-1/2 text-right p-1">
            <PopUpText text={leftText} offset={200}/>
          </div>
          <div className="w-1/2 text-left p-1">
            <PopUpText text={rightText} offset={200}/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-fit md:h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-teal-700">
      <div className="h-1/3 flex items-center text-white">
        <Title title="Profile"/>
      </div>
      <div className={`h-2/3 w-full text-slate-50 ${caveat.className}`}>
        <PopUpTexts leftText="Name :" rightText="Asaringo"/>
        <PopUpTexts leftText="Age :" rightText="27"/>
        <PopUpTexts leftText="From :" rightText="Japan"/>
        <PopUpTexts leftText="Degree :" rightText="Master of Enginering"/>
        <PopUpTexts leftText="Occupation :" rightText="Software Engineer"/>
      </div>
    </div>
  )
}