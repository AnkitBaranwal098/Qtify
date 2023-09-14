import React from 'react'

const Logo = ({Icon, width=0, height=0}) => {
  console.log(width, height)
  return (
    <img src={Icon} width={width} alt='Logo-Icon'/>
  )
}

export default Logo