import React from 'react'

const CardImage = ({imgSrc, width=0, height=0}) => {
  return (
    <img src={imgSrc} width={width} height={height} alt="Card Display" 
    style={{overflow:'hidden',borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}
    />
  )
}

export default CardImage