import React from 'react'

const StarshipCard = ({ starship }) => {
  return (
    <article className = "starship-card">
        <h2>{starship.name}</h2>
        <p><strong>Class:</strong>{starship.starship_class}</p>
        <p><strong>Manufacturer:</strong>{starship.manufacturer}</p>
        <p><strong>Model:</strong>{starship.model}</p>

    </article>
  )
}

export default StarshipCard