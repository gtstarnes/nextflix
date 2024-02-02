import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
        <div className="flex flex-col justify-center items-center gap-6 text-lg">
            <h1 className="text-4xl font-bold">Unlimited movies, TV shows, and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership</p>
        </div>
        <fieldset className="flex gap-2 mt-5">
            <input type="email" id="email" name="email" placeholder='Email address'required
                className="h-16 w-[400px] rounded p-4 border-2 border-gray-400
                focus:outline-none focus:border-gray-300" 
                />
            <button type="submit" 
                className='bg-red-500 w-[200px] rounded text-2xl font-semibold
                            hover:bg-red-600' >
                    Get Started {'>'}
            </button>
        </fieldset>
    </div>
  )
}

export default Hero