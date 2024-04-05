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
      <Row id='2' title='Popular Shows on NextFlix' fetchURL={requests.requestPopularTV} />
      <Row id='3' title='Top Rated Movies on NextFlix' fetchURL={requests.requestTopRated} />
      <Row id='4' title='Top Rated Shows on NextFlix' fetchURL={requests.requestTopRatedTV} />
      <Row id='5' title='Coming Soon to a Living Room Near You' fetchURL={requests.requestUpcoming} />
      <Row id='6' title='Truer Than Fiction' fetchURL={requests.requestDocumentary} />
    </div>
  )
}

export default Landing