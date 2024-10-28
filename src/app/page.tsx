'use client'

import HeroSection from '@/components/homePageComponents/HeroSection'
import Approach from '@/components/homePageComponents/Approach'
import HealingJourney from '@/components/homePageComponents/HealingJourney'
import About from '@/components/homePageComponents/About'
import HealingJourneyCertificates from '@/components/homePageComponents/HealingJourneyCertificates'
import SenjaTestimonials from '@/components/homePageComponents/SenjaTestimonials'
import Typeform from '@/components/homePageComponents/TypeForm'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <HeroSection/>
      <Approach/>
      <HealingJourney/>
      <About/>
      <HealingJourneyCertificates/>
      <SenjaTestimonials/>
      <Typeform/>
    </div>
  )
}
