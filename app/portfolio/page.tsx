'use client'

import Start from '@/ui/portfolio/start'
import AboutMe from '@/ui/portfolio/aboutme'
import Skills from '@/ui/portfolio/skills'
import Works from '@/ui/portfolio/woks'

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
