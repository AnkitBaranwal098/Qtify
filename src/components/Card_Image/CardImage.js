import React from 'react'

const CardImage = ({imgSrc, width=0, height=0}) => {
  return (
    <img src={imgSrc} width={width} height={height} alt="Card Display"/>
  )
}

export default CardImage