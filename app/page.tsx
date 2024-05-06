"use client"
import Faqs from './components/FAQS/Faqs'
import Hero from './components/Hero'
import Reasons from './components/landing/reasons/Reasons'


export default function Home() {
  return (
      <>
        <Hero />
        <Reasons />
        <Faqs />
      </>
  )
}
