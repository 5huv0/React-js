import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeadSec from './components/HeadSec'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar /> <HeadSec /> <Card/>
    </>
  )
}

export default App
