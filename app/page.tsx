import EmailSignUpForm from './components/EmailSignUpForm'
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
          <h1></h1>
          <p></p>
        </HomeCard>
        <EmailSignUpForm />
      </>
  )
}
