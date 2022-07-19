import NavigationBar from "../components/elements/NavigationBar"
import Header from "../components/sections/Header"
import AboutSection from "../components/sections/About"
import ProjectsSection from "../components/sections/Projects"
import CertificationsSection from "../components/sections/Certifications"
import ContactSection from "../components/sections/Contact"


import React from 'react'

const HomePage = () => {
    return (
        <>
            <NavigationBar />
            <Header />
            <AboutSection />
            <ProjectsSection />
            <CertificationsSection />
            <ContactSection />
        </>
    )
}

export default HomePage