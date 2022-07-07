const NavigationBar = () => {
  return (
    <nav>
        <ul className="flex text-2xl text-white">
            <li className="py-9 px-5"><a href="#about">About me</a></li>
            <li className="py-9 px-5"><a href="#projects">Projects</a></li>
            <li className="py-9 px-5"><a href="#certifications">Certifications</a></li>
            <li className="py-9 px-5"><a href="#contact">Contact me</a></li>
        </ul>
    </nav>
  )
}

export default NavigationBar