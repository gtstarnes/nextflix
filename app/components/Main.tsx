
import { useEffect, useState } from "react"
import { requests } from "../requests"
import type {Feature} from "../types/types"

const Main = () => {
    const [movies, setMovies] = useState<Feature[]>([])
    const movie = movies[Math.floor(Math.random() * movies.length)]
    const releaseYear = movie?.release_date.slice(0,4)
    const score = Math.floor(movie?.vote_average / 10 * 100)

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

    const shortenSummary = (summary: string, length: number = 150) => {
        if (summary?.length > length) {
            return summary.slice(0, length) + ' . . .'
        }
    }

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
        <div className="absolute w-full h-[550px] bg-black opacity-50"></div>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}
            className="w-full h-full object-cover lg:object-center" />
        <div className="absolute w-full top-[40%] p-4 md:p-8">
            <h1 className="font-extrabold text-[2rem] lg:text-[3rem]">{movie?.title}</h1>

            <div className="flex gap-10">
                <div className="">KINOMETER: {score}%</div>
                <div>{releaseYear}</div>
                
            </div>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%]">{shortenSummary(movie?.overview) || 'No Summary Available'}</p>
            <div className="flex gap-10 mt-4">
                <button className="bg-red-500 p-4 w-[150px] rounded text-[1.2rem] hover:bg-red-700">Watch</button>
                <button>Add to Watchlist</button>
            </div>
        </div>

        
    </div>
  )
}

export default Main