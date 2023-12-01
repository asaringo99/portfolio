'use client'

import Start from './start'
import AboutMe from './aboutme'
import Skills from './skills'
import Works from './woks'

export default function Page() {
  return(
    <div className="w-full flex flex-col justify-center items-center md:px-16 lg:px-20 xl:px-24">
      <div className="xl:w-5/6">
        <Start/>
        <AboutMe/>
        <Skills/>
        <Works/>
      </div>
    </div>
  )
}
