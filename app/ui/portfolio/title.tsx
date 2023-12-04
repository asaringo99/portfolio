import React from "react";
import { dosis } from "@/ui/font";

export default function Title(props: {title: string}) {
  const { title } = props;
  return (
    <div className={`text-3xl md:text-5xl ${dosis.className} p-8`}>
      {title}
    </div>
  )
}