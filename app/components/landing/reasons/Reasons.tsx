import React from 'react'
import {reasonsInfo} from './reasonsInfo'
import HomeCard from '../../HomeCard'

const Reasons = () => {
  return (
    <HomeCard>
      <h3 className="font-bold">More Reasons to Join</h3>
      <div>
        {reasonsInfo.map(reason => {
          return (
            <div key={reason.id}>
              <h2 className="font-bold text-xl">{reason.reason}</h2>
              <div>{reason.picture}</div>
            </div>
          )
        })}
      </div>
    </HomeCard>
  )
}

export default Reasons