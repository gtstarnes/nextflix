import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
      <h1>Forgot Email/Password</h1>
      <p>How would you like to reset your password?</p>
      <form>
        <input type="checkbox" checked />Email<br/>
        <input type="checkbox" />Text Message (SMS)<br/>

        <div>
          <p>We will send you an email with instructions on how to reset your password.</p>
          <input type="email" placeholder="name@example.com" />
          <button type="submit">Email Me</button>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword