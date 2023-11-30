import Title from "@/ui/portfolio/title";
import React from "react";
import clsx from "clsx";
import PopUpText from "@/ui/portfolio/popuptext";

export default function AboutMe() {

  const PopUpTexts = (props: {leftText: string, rightText: string}) => {
    const { leftText, rightText } = props;
    return (
      <div className="w-full flex flex-col items-center">
        <div className="p-6 flex flex-row items-center w-full">
          <div className="w-1/2 text-right p-1">
            <PopUpText text={leftText}/>
          </div>
          <div className="w-1/2 text-left p-1">
            <PopUpText text={rightText}/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-lime-200">
      <div className="h-1/3 flex items-center">
        <Title title="Profile"/>
      </div>
      <div className="h-2/3 w-full">
        <PopUpTexts leftText="Name :" rightText="Asaringo"/>
        <PopUpTexts leftText="Age :" rightText="27"/>
        <PopUpTexts leftText="From :" rightText="Japan"/>
        <PopUpTexts leftText="Degree :" rightText="Master (Enginering)"/>
        <PopUpTexts leftText="Occupation :" rightText="Software Engineer"/>
      </div>
    </div>
  )
}