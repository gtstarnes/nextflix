"use client"
import EmailSignUpForm from './components/EmailSignUpForm'
import Faqs from './components/FAQS/Faqs'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard'
import NavBar from './components/NavBar'
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
