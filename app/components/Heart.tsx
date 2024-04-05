import { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

const Heart = () => {
  return (
    <div>
        <FaRegHeart className="absolute top-2 right-2" size={20} />
    </div>
  )
}

export default Heart