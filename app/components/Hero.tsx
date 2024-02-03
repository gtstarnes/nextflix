import React from 'react'
import EmailSignUpForm from './EmailSignUpForm'

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh] gap-6">
        <div className="flex flex-col justify-center items-center gap-6 text-lg">
            <h1 className="text-4xl font-bold">Unlimited movies, TV shows, and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
        </div>
        <EmailSignUpForm />
    </div>
  )
}

export default Hero