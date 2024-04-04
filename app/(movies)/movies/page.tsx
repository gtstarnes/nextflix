'use client'
import Main from '@/app/components/Main'
import Row from '@/app/components/Row'
import { requests } from '@/app/requests'
import React from 'react'

const Landing = () => {
  return (
    <div className="">
      <Main  />
      <Row id='1' title='Popular Movies on NextFlix' fetchURL={requests.requestPopular} />
    </div>
  )
}

export default Landing