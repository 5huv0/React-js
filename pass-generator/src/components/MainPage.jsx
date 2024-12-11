import React from 'react'

export default function MainPage() {
  return (
    <div>
      <div className='bg-slate-700 text-white p-9'>

        <div className='m-4'>
          <label htmlFor="">
            <input type="" className='p-3 outline-none rounded-l-lg' readOnly style={{width:'550px'}} />
            <button className='bg-black text-white p-3 w-100 rounded-r-lg

'>copy</button>
          </label>          
        </div>

        <div className='m-4 gap-6 flex justify-center text-xl'>
          <label htmlFor="">
            <input 
            type="range"
            min="0"
            max="1000000" 
            className='m-2'/>
            Generate Passwords
          </label>

          <label htmlFor="">
            <input type="checkbox" className='m-3'/>
            Numbers
          </label>

          
          <label htmlFor="">
            <input type="checkbox" className='m-3'/>
            Characters
          </label>
        </div>

      </div>
    </div>
  )
}
