import type { FeatureType } from "../types/types"

const Feature = ({show}: {show: FeatureType}) => {
  return (
    <div>
        <h4>{show.title}</h4>
        <img src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`} alt={show.title}/>
    </div>
  )
}

export default Feature