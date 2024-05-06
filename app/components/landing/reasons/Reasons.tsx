import React from 'react'
import {reasonsInfo} from './reasonsInfo'
import HomeCard from '../../HomeCard'

const Reasons = () => {
  return (
    <HomeCard>
      <h3 className="font-bold text-lg mb-2">More Reasons to Join</h3>
      <div>
        {reasonsInfo.map(reason => {
          return (
            <div key={reason.id} className="flex flex-col justify-between h-[8rem] mb-2 rounded-md bg-slate-700 p-4">
              <h2 className="font-bold text-xl">{reason.reason}</h2>
              <div className="text-red-500 font-extrabold self-end text-lg">{reason.picture}</div>
            </div>
          )
        })}
      </div>
    </HomeCard>
  )
}

export default Reasons