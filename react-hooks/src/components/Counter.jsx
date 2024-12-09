import React, { useState } from 'react'

export default function Counter() {

    let [counter, setCounter] = useState(0)

    const addCounter = function add() {
        setCounter(counter + 1)
    }

    const subtCounter = function subt(){
        if(counter <= 0){
            counter = 'not possible';
        }
        counter = counter -  1
        setCounter(counter)
        console.log(counter)
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
