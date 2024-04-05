import { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

const Heart = () => {
    const [favorite, setFavorite] = useState<boolean>(false)
  return (
    <div>
        {favorite ?
            <FaHeart className="absolute top-2 right-2" size={20} /> :
            <FaRegHeart className="absolute top-2 right-2" size={20} />
        }
    </div>
  )
}

export default Heart