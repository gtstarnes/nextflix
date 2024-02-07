import React from 'react'
import EmailSignUpForm from '../EmailSignUpForm'
import { faqs } from './faqsInfo';

const Faqs = () => {
  return (
    <div>
        {faqs.map(faq => {
          return (
            <>
              <button key={faq.question}>{faq.question}</button>
              <div>
                <p>{faq.answer}</p>
              </div>
            </>
          )
        })}
        <EmailSignUpForm />
    </div>
  )
}

export default Faqs