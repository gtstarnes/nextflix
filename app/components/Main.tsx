
import { useEffect, useState } from "react"
import { requests } from "../requests"
import type {Feature} from "../types/types"

const Main = () => {
    const [movies, setMovies] = useState<Feature[]>([])
    const movie = movies[Math.floor(Math.random() * movies.length)]
    const releaseYear = movie?.release_date.slice(0,4)

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await fetch(requests.requestPopular)
                const data = await response.json();
                setMovies(data.results)
            }
            catch (error) {
                console.error('Error fetching data: ', error)
            }
        }

        getMovie();
    }, [])

  return (
    <div className="relative">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1>{movie?.title}</h1>

            <div className="flex gap-10">
                <div>{releaseYear}</div>
                <div>{movie?.vote_average / 10 * 100} %</div>
            </div>
            <p>{movie?.overview}</p>
            <button>Watch</button>
            <button>Add to Watchlist</button>
        </div>

        
    </div>
  )
}

export default Main