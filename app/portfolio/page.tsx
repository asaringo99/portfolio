'use client'

import Start from './start'
import AboutMe from './aboutme'
import Skills from './skills'

export default function Page() {
  return(
    <div className="w-full flex flex-col px-32">
      <Start/>
      <AboutMe/>
      <Skills/>
    </div>
  )
}
