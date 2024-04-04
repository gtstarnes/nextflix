import {useEffect, useState} from 'react'
import type { FeatureType, RowType } from '../types/types'
import Feature from './Feature'



const Row = ({title, id, fetchURL}: RowType) => {
    const [shows, setShows] = useState<FeatureType[]>([])

    useEffect(() => {
        const requestMovies = async () => {
            try {
                const response = await fetch(fetchURL)
                const data = await response.json();
                setShows(data.results)
            }
            catch (error) {
                console.log('Error ', error)
            }
        }
        requestMovies()
    }, [fetchURL])
  return (
    <div>
        <h2 className="font-bold p-4">{title}</h2>
        <div className="flex relative items-center">
            <div className="w-full h-full overflow-x-scroll scroll-smooth">
                {shows.map(show => {
                    return (
                        <Feature key={show.id} show={show} />
                    )
                })}
            </div>
        </div>
        
    </div>
  )
}

export default Row