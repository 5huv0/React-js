import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeadSec from './components/HeadSec'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Card 
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
        />

      </div>
    </>
  )
}

export default App
