import React from 'react'

type HomeCardProps = {
    children: React.ReactNode
}

const HomeCard = ({children}: HomeCardProps) => {
  return (
    <div className="p-8">
        {children}
    </div>
  )
}

export default HomeCard