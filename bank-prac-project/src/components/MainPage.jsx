import React from 'react'

export default function MainPage() {
  return (
    <div className='text-white text-2xl font-bold'>
       <div className='flex flex-row justify-evenly m-5 rounded-2xl'>    {/* First div here */}
        <div className='bg-slate-600 p-16 rounded-2xl'>
            Deposite 00$
        </div>
        <div className='bg-orange-600 p-16 rounded-2xl'>
            Withdraw 00$
        </div>
        <div className='bg-green-600 p-16 rounded-2xl'>
            Balance 00$
        </div>
       </div>

       <div className='flex flex-row justify-evenly m-5'>    {/* Second div here */}
        <div className='flex flex-col items-start bg-blue-600 p-16 gap-4 rounded-2xl text-black text-2xl font-bold'>   {/* First input box here */}
            <label htmlFor=""> 
                Deposite Money
            </label>
            <input type="number" placeholder='Deposite' className='p-2 border-none outline-none'/>
            <button className='bg-black text-white rounded-3xl p-4' >
                Deposite
            </button>
        </div>

        <div className='flex flex-col items-start bg-yellow-400 p-16 gap-4 rounded-2xl text-black text-2xl font-bold'>   {/* second input box here */}
            <label htmlFor="">
                Withdraw Money
            </label>
            <input type="number" placeholder='Withdraw' className='p-2 outline-none'/>
            <button className='bg-black text-white rounded-3xl p-4'>
                Withdraw
            </button>
        </div>
       </div>
    </div>
  )
}
