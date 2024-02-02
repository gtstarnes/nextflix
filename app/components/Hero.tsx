import React from 'react'

const Hero = () => {
  return (
    <div>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Watch anywhere. Canel anytime</p>
        <p>Ready to watch? Enter your email to create or restart your membership</p>
        <fieldset>
            <input type="email" id="email" name="email" />
            <button type="submit">Get Started {'>'}</button>
        </fieldset>
    </div>
  )
}

export default Hero