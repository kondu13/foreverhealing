'use client'

import HeroSection from '@/components/homepageComponents/HeroSection'
import Approach from '@/components/homepageComponents/Approach'
import HealingJourney from '@/components/homepageComponents/HealingJourney'
import About from '@/components/homepageComponents/About'
import HealingJourneyCertificates from '@/components/homepageComponents/HealingJourneyCertificates'
import SenjaTestimonials from '@/components/homepageComponents/SenjaTestimonials'
import Typeform from '@/components/homepageComponents/TypeForm'

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
