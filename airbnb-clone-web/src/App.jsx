import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeadSec from './components/HeadSec'
import Card from './components/Card'
import Joke from './components/Joke'
import JokesData from './components/JokesData'

function App() {

  const JokeElement = JokesData.map(joke => {
    return <Joke joke = {joke.joke} punchline = {joke.punchline} />
  })

  return (
    <>
      <div className='app'>

        {JokeElement}

        {/* <Card 
          img = "./src/pics/pic4.png"
          name = "Katie"
          des = "DO the course with katie."
          price = "From 130$/person"
        /> 

        <Card 
          img = "./src/pics/pic5.png"
          name = "Katier"
          des = "DO the course with katier."
          price = "From 135$/person"
        />

        <Card 
          img = "./src/pics/pic6.png"
          name = "Katies"
          des = "DO the course with katies."
          price = "From 132$/person"
        />

        <Card 
          img = "./src/pics/pic7.png"
          name = "Katiesa"
          des = "DO the course with katiesa."
          price = "From 133$/person"
        /> */}

{/* 
        <Joke 
          punchline = "Lorem, ipsum dolor."
        />

        <Joke 
          joke = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aperiam!"
          punchline = "Lorem, ipsum dolor."
        />

        <Joke 
          joke = "Lorem ipsum dolor sit amet consectetur."
          punchline = "Lorem ipsum "
        />

        <Joke 
          joke = "Lorem ipsum dolor sit amet consectetur Lorem ornme"
          punchline = "Lorem ipsum dolor sit amet."
        /> */}



      </div>
    </>
  )
}

export default App
