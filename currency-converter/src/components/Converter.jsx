import React from 'react'

export default function Converter() {
  return (
    <div className='bg-slate-500 p-7 m-8 flex flex-col justify-evenly'>
        <label htmlFor="">
            from
            <input type="text" />
        </label>

        <button className='bg-red-600 m-5 w-20 h-10'>
            submit
        </button>

        <label htmlFor="">
            to
            <input type="text" />
        </label>
    </div>
  )
}
