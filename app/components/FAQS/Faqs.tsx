import React from 'react'
import EmailSignUpForm from '../EmailSignUpForm'
import { faqs } from './faqsInfo';

const Faqs = () => {
  return (
    <div>
        {faqs.map(faq => {
          return (
            <div key={faq.question} className="w-full">
              <button className="w-full h-10 bg-slate-500 rounded-sm mt-2">{faq.question}</button>
              <div>
                <p className="w-full pl-2 mt-1 bg-slate-600">{faq.answer}</p>
              </div>
            </div>
          )
        })}
        <EmailSignUpForm />
    </div>
  )
}

export default Faqs