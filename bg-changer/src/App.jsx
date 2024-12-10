import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  
  const blueColor = function blue(){
    setColor("blue")
  }

  const greenColor = function green(){
    setColor("green")
  }

  const blackColor = function black(){
    setColor("black")
  }

  const purpleColor = function purple(){
    setColor("purple")
  }

  const redColor = function red(){
    setColor("red")
  }

  const orangeColor = function orange(){
    setColor("orange")
  }

  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor : color}}>
      <div className='bg-white absolute inset-x-0 bottom-0 m-3'>
        <button className='bg-blue-800 rounded-full m-2  text-white p-4' onClick={blueColor}>Blue</button>
        <button className='bg-green-600 rounded-full m-2 text-white p-4' onClick={greenColor}>Green</button>
        <button className='bg-black rounded-full m-2 text-white p-4' onClick={blackColor}>Black</button>
        <button className='bg-purple-700 rounded-full m-2 text-white p-4' onClick={purpleColor}>Purple</button>
        <button className='bg-red-600 rounded-full m-2 text-white p-4' onClick={redColor}>Red</button>
        <button className='bg-orange-600 rounded-full m-2 text-white p-4' onClick={orangeColor}>Orange</button>
      </div>
    </div>

  
    </>
  )
}

export default App
