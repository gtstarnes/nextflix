import { Metadata } from 'next'
import React from 'react'

type props = {
  params: {
    movie: string
  }
}

const MoviePage = ({params}: props) => {
  return (
    <div>MoviePage: {params.movie}</div>
  )
}

export default MoviePage