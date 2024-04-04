import {useEffect, useState} from 'react'
import type { Feature, Row } from '../types/types'



const Row = ({title, id, fetchURL}: Row) => {
    const [movies, setMovies] = useState<Feature[]>([])

    useEffect(() => {
        const requestMovies = async () => {
            try {
                const response = await fetch(fetchURL)
                const data = await response.json();
                setMovies(data.results)
            }
            catch (error) {
                console.log('Error ', error)
            }
        }
        requestMovies()
    }, [fetchURL])
  return (
    <div>
        
    </div>
  )
}

export default Row