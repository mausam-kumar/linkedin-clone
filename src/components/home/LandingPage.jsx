import React from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import SectionCardTwo from './SectionCardTwo.jsx'
import SectionCardOne from './SectionCardOne.jsx'
import SectionCardThree from './SectionCardThree.jsx'
import FooterSection from './FooterSection.jsx'

function LandingPage() {
    return (
        <div>
            <Header />
            <Hero />
            <SectionCardOne />
            <SectionCardTwo />
            <SectionCardThree />
            <FooterSection />
        </div>
    )
}

export default LandingPage
