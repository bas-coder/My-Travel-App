import React from 'react'
import { imgSrc } from '../static'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo">
        <img src={imgSrc.logo} alt="" />
      </div>
      <div className="header__title">
        <h2>My travel journal</h2>
      </div>
    </div>
  )
}

export default Header
