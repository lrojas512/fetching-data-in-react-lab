import React from 'react'
import StarshipCard from '../StarshipCard/StarshipCard'

const StarshipList = ({starship}) => {
  return (
    <section>
        {starship.map((ship) =>(
            <StarshipCard key={ship.name} starship={ship} />
        ))}
    </section>
  )
}

export default StarshipList