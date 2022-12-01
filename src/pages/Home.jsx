import React from 'react'
import Card from "../components/Card";
import Header from "../components/Header";
import data from "../data/data"

function Home() {

  const cards = data.map ((card) => {
    return <Card
    key={card.id} 
    card = {card}
    />
  }) 

  return (
    <div className='home'>
        <Header />

        <div className="home__card">
        {cards}
        </div>
    </div>
  )
}

export default Home