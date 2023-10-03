'use client'

import { useState, createContext, useRef } from 'react'
import { buttons } from './data'
import Template from './Template'
import SelectTemplate from './SelectTemplate'
import Details from './Details'
import Social from './Social'
import Style from './Style'
import Images from './Images'
import CTA from './CTA'
import Submit from './Submit'

export const FormContext = createContext()

export default function Home() {

  const [ step, setStep ] = useState(buttons[0].name)
  const [ template, setTemplate ] = useState(1)

  const formRef = useRef()
  const [ form, setForm ] = useState(new FormData(formRef.current))

  const handleChange = () => {
    setForm(new FormData(formRef.current))
  }

  return (
    <FormContext.Provider value={{form: form, onChange: handleChange}}>
    <div 
      className="fixed top-0 left-0 h-screen w-screen bg-base-400 flex flex-row"
    >
      <div 
        className="flex flex-col grow max-w-[350px] h-full bg-base-900 border-r-2 border-base-500 shadow-md text-base-50 rounded-r-md overflow-x-auto"
      >
        <div className="flex flex-row text-sm font-medium">
          {buttons.map((button) => {
            return (
              <button 
                title={button.name}
                key={button.name}
                onClick={() => setStep(button.name)}
                className={`text-md grow flex flex-col items-center justify-center p-4 hover:text-primary-500 ${button.name === step ? 'text-primary-500 bg-base-900' : 'text-base-50 bg-base-800'}`}
              >
                {button.svg}
              </button>
            )
          })}
        </div>
        <form
          ref={formRef}
          className="relative grow flex flex-col w-full overflow-y-auto scrollbar scrollbar-thin scrollbar-track-base-900 scrollbar-thumb-base-700 hover:scrollbar-thumb-primary-500 scrollbar-thumb-rounded-md my-8"
        >
           
          <div className={`absolute flex-col w-full px-8 top-0 left-0 space-y-8 ${step === "Template" ? 'flex' : 'hidden'}`}>
            <span className="font-bold">Choose A Template</span>
            <SelectTemplate template={template} setTemplate={setTemplate} /> 
          </div>
           
          <div className={`absolute flex-col w-full px-8 top-0 left-0 space-y-8 ${step === "Details" ? 'flex' : 'hidden'}`}>
            <Details />
            <Social />
          </div>     
          
          <div className={`absolute flex-col  w-full px-8 top-0 left-0 space-y-8 ${step === "Style" ? 'flex' : 'hidden'}`}>
            <Style />
          </div>    
          
          <div className={`absolute flex-col w-full px-8 top-0 left-0 space-y-8 ${step === "Customize" ? 'flex' : 'hidden'}`}>
            <Images />
            <CTA />
          </div>
        </form>
        <span className="text-xs text-center pb-4">© Copyright 2023 Hungry Ram</span>
      </div>
      <div className="w-auto grow flex flex-col justify-center items-center space-y-8">
          <div className="flex flex-col w-3/5 h-3/5 bg-[#FFFFFF] shadow-lg rounded-md">
            <div className="flex flex-row items-center p-4 bg-base-800 rounded-t-md text-base-50 uppercase text-sm">
              Hungry Ram Email
            </div>
            <div className="flex flex-col grow items-cneter justify-center p-8">
              <Template
                template={template}
              />
            </div>
          </div>
        <Submit template={template}/>
      </div>
    </div>
    </FormContext.Provider>
  )
}
