import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeadSec from './components/HeadSec'
import Card from './components/Card'
import Joke from './components/Joke'
import JokesData from './components/JokesData'

function App() {

  const JokeElement = JokesData.map(item => {
    return <Joke setup = {item.setup} punchline = {item.punchline} />
  })


  return (
    <>
      <div className='app'>

        {JokeElement}

      </div>
    </>
  )
}

export default App
