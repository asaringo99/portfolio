'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/solid";
import { satisfy, cabin, viga, dosis, opensans, caveat } from "@/ui/font";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import RotatingGear from "@/ui/rotating-gear";

export default function HeaderNav() {
  const pathname = usePathname();
  console.log(pathname)

  const navs = [
    { id: "homenav", name: "Home", icon: HomeIcon, href: "/home/" },
    { id: "resumenav", name: "Resume", icon: DocumentIcon, href: "/resume/" },
    { id: "portfolionav", name: "Portfolio", icon: NewspaperIcon, href: "/portfolio/" },
    { id: "playnav", name: "Play", icon: PlayCircleIcon, href: "/play/" },
  ]

  return (
    <div className="flex w-full bg-gray-50/90 invisible lg:visible">
      <div className="flex w-1/2 flex-row items-center">
        <div className="flex justify-items-start p-8 text-black text-5xl">
          <Link
            href={"/portfolio"}
            className={clsx(
                `flex flex-row items-center mr-4 cursor-none transition duration-300 hover:scale-110 ${caveat.className}`
            )}
          >
            Asaringo
          </Link>
          <RotatingGear/>
        </div>
      </div>
      <div className={`flex flex-row w-1/2 justify-end items-center`}>
        {
          navs.map((nav) => {
            const Icon = nav.icon;
            return (
              <Link 
                key={nav.id}
                href={nav.href}
                className={clsx(
                  "w-8 cursor-none text-black px-12 py-2 rounded-full flex flex-col items-center transition duration-300 hover:scale-150",
                  {
                    "bg-black text-white": nav.href === pathname
                  }
                )}
              >
                <Icon className="h-8 w-8"/>
                <div className={cabin.className}>{nav.name}</div>
              </Link>
            )
          })
        }
        <div className="cursor-none text-black px-8 flex flex-col items-center transition duration-300 hover:scale-150">
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