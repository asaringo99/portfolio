'use client'

import React from "react";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { satisfy, cabin } from "@/ui/font";
import RotatingGear from "./rotatinggear";

export default function HeaderNav() {
  return (
    <div className="flex w-full bg-gray-50/90">
      <div className="flex w-1/2 flex-row items-center">
        <div className="flex justify-items-start p-8 text-black text-5xl">
          <Link
            href={"./portfolio"}
            className={`flex flex-row items-center mr-4 ${satisfy.className}`}
          >
            Asaringo
          </Link>
          <RotatingGear/>
        </div>
      </div>
      <div className={`flex flex-row w-1/2 justify-end items-center ${cabin.className}`}>
        <Link className="text-black px-8 flex flex-col items-center" href="./home">
          <HomeIcon className="h-8 w-8" />
          Home
        </Link>
        <Link className="text-black px-8 flex flex-col items-center" href="./redume">
          <DocumentIcon className="h-8 w-8" />
          Redume
        </Link>
        <Link className="text-black px-8 flex flex-col items-center" href="./portfolio">
          <NewspaperIcon className="h-8 w-8" />
          Portfolio
        </Link>
        <Link className="text-black px-8 flex flex-col items-center" href="./play">
          <PlayCircleIcon className="h-8 w-8" />
          Play
        </Link>
        <div className="text-black px-8 flex flex-col items-center">
          <LanguageIcon className="h-8 w-8"/>
          {"Ja / En"}
        </div>
        <div className="p-6">
          <Image
            src="/bird.png"
            width="60"
            height="60"
            alt="my bird"
            className="rounded-full"
            />
        </div>
      </div>
    </div>
  )
}