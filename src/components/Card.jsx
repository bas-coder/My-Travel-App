import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Card = ({card}) => {
  return (
    <div className='card'>
      <div className="card__main">
        <div className="card__img">
          <img src={card.img} alt="" />
        </div>
        <div className="card__content">
          <div className="card__content-region">
            <FmdGoodIcon />
            <p className='location'>{card.location}</p>
            <p className='link'><a href={card.mapslink}>View on Google Maps</a></p>
          </div>

          <h1>{card.title}</h1>
          <h5>{card.date}</h5>

          <p className='description'>{card.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
