import React from 'react'
import "../Styles/BlueBtn.css"

const BlueBtn = ({label, handleClick}) => {
  return (
    <div onClick={handleClick} className='blue-btn'>{label}</div>
  )
}

export default BlueBtn