'use client'

import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/homepageComponents/HeroSection'
import ApproachAndBenefits from '@/components/homepageComponents/ApproachAndBenefits'
import HealingJourney from '@/components/homepageComponents/HealingJourney'
import About from '@/components/homepageComponents/About'
import ResearchSummary from '@/components/homepageComponents/ResearchSummary'
import HealingJourneyCertificates from '@/components/homepageComponents/HealingJourneyCertificates'
import SenjaTestimonials from '@/components/SenjaTestimonials'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <HeroSection/>
      <ApproachAndBenefits/>
      <HealingJourney/>
      <About/>
      <HealingJourneyCertificates/>
      <SenjaTestimonials/>
    </div>
  )
}
