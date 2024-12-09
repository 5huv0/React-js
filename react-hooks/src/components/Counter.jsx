import React from 'react'

export default function Counter() {

    let counter = 23;

    const addCounter = function add() {
        
    }

    const subtCounter = function subt(){
        
    }

  return (
    <div className='bg-slate-500 flex justify-around p-20 m-20'>
      <p className='text-3xl'>Counter value : {counter}</p>

      <button className='bg-orange-600 p-5 hover:bg-teal-400 rounded-full' onClick={addCounter}>
        Add Value
      </button>

      <button className='bg-orange-600 p-5  hover:bg-teal-400 rounded-full' onClick={subtCounter}>
        Subtract Value
      </button>

    </div>
  )
}
