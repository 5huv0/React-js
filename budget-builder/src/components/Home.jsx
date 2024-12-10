import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
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
  )
}
