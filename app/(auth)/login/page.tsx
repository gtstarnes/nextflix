import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <div>
          <input type="" placeholder='Email or phone number' />
        </div>
        <div>
          <input type="password" placeholder='Password' />
        </div>
        <button type="submit">Sign In</button>
        <Link href="/forgot-password">Forgot password?</Link>
      </form>
      <div>
        <input type="checkbox" checked />Remember Me<br />
        <p>New to Nextflix? <Link href="/register">Sign up now</Link>.</p>
        <p>This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. (NOT REALLY)</p>
      </div>
      
    </div>
  )
}

export default Login