
import React, { useState } from 'react'
import EmailSignUpForm from '../EmailSignUpForm'
import { faqs } from './faqsInfo';

type PanelType = number | null;


const Faqs = () => {
  const [activePanel, setActivePanel] = useState<PanelType>(null);
  const togglePanel = (id: number) => {
    let icon:string = "+";
    if (activePanel === id) {
      icon = "x"
    }
    return icon
  }
  return (
    <div>
        {faqs.map(faq => {
          return (
            <div key={faq.id} className="w-full">
              <button className="w-full h-10 bg-slate-500 rounded-sm mt-1 flex justify-between items-center p-2">{faq.question} <span>{togglePanel(faq.id)}</span></button>
              <div>
                <p className="w-full pl-2 mt-1 bg-slate-600 rounded-sm">{faq.answer}</p>
              </div>
            </div>
          )
        })}
        <EmailSignUpForm />
    </div>
  )
}

export default Faqs