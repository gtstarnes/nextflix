
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

  const changeActivePanel = (id: number) => {
    if (activePanel !== id) {
      setActivePanel(id)
    } else {
      setActivePanel(null)
    }
  }
  return (
    <div>
        {faqs.map(faq => {
          return (
            <div key={faq.id} className="w-full">
              <button className="w-full h-16 bg-slate-500 rounded-sm flex justify-between items-center p-4 text-lg" onClick={() => changeActivePanel(faq.id)}>{faq.question} <span className="text-xl">{togglePanel(faq.id)}</span></button>
              <div>
                <p className={activePanel === faq.id ? "answer panel-opened" : "answer panel-closed"}>{faq.answer.split('\n\n')}</p>
              </div>
            </div>
          )
        })}
        <EmailSignUpForm />
    </div>
  )
}

export default Faqs