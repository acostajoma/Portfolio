import { useState } from "react"
import PrettyLink from "./PrettyLink"

const NavigationBar = () => {
  
  const [showNavBar, setShowNavBar] = useState(false)

  return (
    <div className='py-3 fixed z-10 top-0 w-full overflow-hidden bg-gray-600 text-xl lg:text-2xl text-white'>

      <div className={` ${!showNavBar ? 'h-14' : 'h-64'} lg:h-full transition-[height] ease-in-out duration-200  container m-auto`}>

        <button 
          className='my-2 mx-5 w-fit p-2 lg:hidden rounded-full hover:bg-gray-400'
          onClick={() => setShowNavBar(!showNavBar) }>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className='flex flex-col lg:flex lg:flex-row'>
          <PrettyLink text="About Me" linkref="#about"/>
          <PrettyLink text="Projects" linkref="#projects"/>
          <PrettyLink text="Certifications" linkref="#certifications"/>
          <PrettyLink text="Contact me" linkref="#contact"/>
        </nav>

      </div>
    </div>
  )
}

export default NavigationBar