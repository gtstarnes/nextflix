"use client"
import EmailSignUpForm from './components/EmailSignUpForm'
import Faqs from './components/FAQS/Faqs'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard'
import NavBar from './components/NavBar'


export default function Home() {
  return (
      <>
        <Hero />
        <HomeCard>
          <h1>Enjoy on your TV</h1>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu ray players, and more.</p>
        </HomeCard>
        <HomeCard>
          <h1>Watch everywhere</h1>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </HomeCard>
        <HomeCard>
          <h1>Create profiles for kids</h1>
          <p>Send kids on adventures with their favorite characters in a space made just for them -- free with your membership</p>
        </HomeCard>
        <HomeCard>
          <h1>Download your shows to watch offline</h1>
          <p>Watch on a plane, train, or submarine...</p>
        </HomeCard>
        <HomeCard>
          <Faqs />
        </HomeCard>
        
      </>
  )
}
