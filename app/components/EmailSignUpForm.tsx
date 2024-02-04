import React from 'react'

const EmailSignUpForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <p>Ready to watch? Enter your email to create or restart your membership</p>
        <form className="flex gap-2 mt-2">
            <input type="email" id="email" name="email" placeholder='Email address'required
                    className="h-16 w-[330px] rounded p-4 border-2 border-gray-400
                    focus:outline-none focus:border-gray-300" 
                    />
                <button type="submit" 
                    className='bg-red-500 w-[200px] rounded text-2xl font-semibold
                                hover:bg-red-600' >
                        Get Started {'>'}
                </button>
        </form>
    </div>
  )
}

export default EmailSignUpForm