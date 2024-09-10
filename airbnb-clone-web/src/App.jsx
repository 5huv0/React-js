import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeadSec from './components/HeadSec'
import Card from './components/Card'
import Joke from './components/Joke'
import JokesData from './components/JokesData'
import CardData from './components/CardData'


function App() {

  const JokeElement = JokesData.map(item => {
    return <Joke 
              setup = {item.setup} 
              punchline = {item.punchline} 
            />
  })

  const Cardsec = CardData.map(item => {
    return <Card 
              img = {item.img}
              name = {item.name}
              des = {item.des}
              price = {item.price}
              openSpot = {item.openSpot}
            />
  })

  return (
    <>
      <div className='app'>

        <Navbar />
        <HeadSec />
        <section className='full-card'>
          {Cardsec}
        </section>
        
        {JokeElement}

      </div>
    </>
  )
}

export default App
