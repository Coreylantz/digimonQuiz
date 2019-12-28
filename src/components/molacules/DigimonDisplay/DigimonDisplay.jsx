import React from 'react'

export const DigimonDisplay = ({ digimonImage }) => {
  return (
    <figure>
      <img src={digimonImage.src} alt={digimonImage.alt} />
    </figure>
  )
}
