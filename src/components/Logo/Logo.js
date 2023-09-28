import React from 'react'

const Logo = ({Icon, width=0, height=0}) => {
  return (
    <img src={Icon} width={width} alt='Logo-Icon'/>
  )
}

export default Logo