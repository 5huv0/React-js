import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Front from './components/Front'
import Back from './components/Back'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
      <Front/> <Back />
    </div>
    
    </>
  )
}

export default App
