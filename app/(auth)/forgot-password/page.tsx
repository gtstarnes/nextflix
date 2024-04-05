"use client"

import {useState} from 'react'

const ForgotPassword = () => {
  const [option, setOption] = useState<string>('');

  const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selection = e.target.value;
    setOption(selection)
  }
  return (
    <div className="mt-20">
      <h1>Forgot Email/Password</h1>
      <p>How would you like to reset your password?</p>
      <form>
        <label htmlFor="email">
          <input type="radio" id="email" value="email" checked={option === 'email'} onChange={changeOption} />
          Email
        </label>
        <label htmlFor="sms">
          <input type="radio" id="sms" value="sms" checked={option === 'sms'} onChange={changeOption} />
          Text Message (SMS)
        </label>

        {option ==='email' ?
          <div>
            <p>We will send you an email with instructions on how to reset your password.</p>
            <input type="email" placeholder="name@example.com" />
            <button type="submit">Email Me</button>
          </div> :
          <div>
              <p>We will send you a verification code to reset your password. Message and data rates may apply</p>
              <input type="tel"/>
              <button type="submit">Text Me</button>
          </div>
        }


      </form>
    </div>
  )
}

export default ForgotPassword