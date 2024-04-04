import {useState} from 'react'
import type { Feature, Row } from '../types/types'



const Row = ({title, id, fetchURL}: Row) => {
    const [movies, setMovies] = useState<Feature[]>([])
  return (
    <div>
        
    </div>
  )
}

export default Row