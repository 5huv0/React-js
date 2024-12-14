import React from 'react'

export default function MainPage() {
  return (
    <div>
        <div className='grid grid-cols-4 grid-flow-row gap-4 bg-slate-800 m-5'>
            <div>Deposite</div>
            <div>Withdraw</div>
            <div>Balance</div>
        </div>
      
        <div className='grid grid-cols-2 grid-flow-row gap-4 bg-orange-600 m-5 '>
            <div>
                <label htmlFor="">
                    Plz Deposite
                    <input type="text" />
                </label>
                <button className='p-5 bg-black text-white'>Depostie</button>
            </div>

            <div>
                <label htmlFor="">
                    Withdraw
                    <input type="text" />
                </label>
                <button className='p-5 bg-black text-white'>Withdraw</button>
            </div>
        </div>
    </div>
  )
}
