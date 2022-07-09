const NavigationBar = () => {
  return (
    <nav className="flex py-5 text-2xl text-white">
      <a className="py-2 mx-7 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:scale-x-0 after:origin-right after:transition-transform ease-in after:duration-500 hover:after:scale-x-100 hover:after:origin-left" href="#about">About me</a>
      <a className="py-2 mx-7 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:scale-x-0 after:origin-right after:transition-transform ease-in after:duration-500 hover:after:scale-x-100 hover:after:origin-left" href="#projects">Projects</a>
      <a className="py-2 mx-7 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:scale-x-0 after:origin-right after:transition-transform ease-in after:duration-500 hover:after:scale-x-100 hover:after:origin-left" href="#certifications">Certifications</a>
      <a className="py-2 mx-7 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:scale-x-0 after:origin-right after:transition-transform ease-in after:duration-500 hover:after:scale-x-100 hover:after:origin-left" href="#contact">Contact me</a>
    </nav>
  )
}

export default NavigationBar