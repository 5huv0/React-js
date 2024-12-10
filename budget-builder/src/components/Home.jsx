import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

let [counter, setCounter] = useState(20000)

const addMoney = function add(){
    setCounter(counter + 10000)
}

const subMoney = function sub(){
    setCounter(counter - 5000)
}

  return (
    <div>
        <div>
            <p className='text-2xl m-9'>
                Give me your budget here 
            </p>
            <p className='text-5xl font-bold'>
                {counter}
            </p>
            <button className='bg-slate-500 p-8 hover:bg-slate-800 text-white m-10' onClick={addMoney}>More </button>
            <button className='bg-slate-500 p-8 hover:bg-slate-800 text-white m-10' onClick={subMoney}>Less </button>
        </div>


        <div>
            <button className='bg-slate-500 p-8 hover:bg-slate-800 text-white m-10'>
                <Link 
                to='build'>
                    Get the Build
                </Link>
            </button>

            <button className='bg-slate-500 p-8 hover:bg-slate-800 text-white m-10'>
                <Link
                to='build1'>
                    Get the Build1
                </Link>
            </button>

            <button className='bg-slate-500 p-8 hover:bg-slate-800 text-white m-10'>
                <Link
                to='build2'>
                    Get the Build2
                </Link>
            </button>
        </div>
      
    </div>
  )
}
