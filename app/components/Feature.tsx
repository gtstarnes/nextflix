import type { FeatureType } from "../types/types"
import Heart from "./Heart"

const Feature = ({show}: {show: FeatureType}) => {
    const title = show.title || show.name
  return (
    <div className="w-[280px] inline-block cursor-pointer relative mx-2">
        <div className="absolute flex items-center justify-center w-full h-full top-0 left-0 opacity-0 hover:opacity-100 hover:bg-black/60 break-all">
              <h4 className="text-sm font-bold max-w-[90%] overflow-clip">{title}</h4>
            <Heart />
        </div>
        <img    
            src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`} alt={title}
            className="w-full h-auto block rounded"
        />
    </div>
  )
}

export default Feature