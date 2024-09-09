import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeadSec from './components/HeadSec'
import Card from './components/Card'
import Joke from './components/Joke'
import JokesData from './components/JokesData'

function App() {

  // const JokeElement = JokesData.map(joke => {
  //   return <Joke joke = {joke.joke} punchline = {joke.punchline} />
  // })

  const colors = [
    <h3>red</h3>,
    <h3>green</h3>,
    <h3>blue</h3>
  ]

  return (
    <>
      <div className='app'>

        {colors}
        {/* {JokeElement} */}

      </div>
    </>
  )
}

export default App
