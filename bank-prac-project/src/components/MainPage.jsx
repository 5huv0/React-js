import React, { useCallback, useState } from 'react'

export default function MainPage() {
    const [deposite, setDeposite] = useState(0)
    const [withdraw, setWithdraw] = useState(0)
    const [balance, setBalance] = useState(0)

    const handleDeposite = useCallback(() => {
        if(deposite > 0){
            setBalance((prevBalance) => prevBalance + deposite)
            setDeposite()
        }
    },[deposite])

    const handleWithdraw = useCallback(() => {
        if (withdraw > 0 && withdraw <= balance) {
          setBalance((prevBalance) => prevBalance - withdraw); // Subtract from balance
          setWithdraw(''); // Clear the input
        } 
        // else if (withdraw > balance) {
        //   alert('Insufficient balance!');
        // } 
        // else {
        //   alert('Please enter a valid withdrawal amount!');
        // }
      }, [withdraw, balance]);

  return (
    <div className='text-white text-2xl font-bold'>
       <div className='flex flex-row justify-evenly m-5 rounded-2xl'>    {/* First div here */}
        <div className='bg-slate-600 p-16 rounded-2xl' >
            Deposite {deposite}$
        </div>
        <div className='bg-orange-600 p-16 rounded-2xl' >
            Withdraw {withdraw}$
        </div>
        <div className='bg-green-600 p-16 rounded-2xl'>
            Balance {balance}$
        </div>
       </div>

       <div className='flex flex-row justify-evenly m-5'>    {/* Second div here */}
        <div className='flex flex-col items-start bg-blue-600 p-16 gap-4 rounded-2xl text-black text-2xl font-bold'>   {/* First input box here */}
            <label htmlFor=""> 
                Deposite Money
            </label>
            <input type="number" placeholder='Deposite' value={deposite} className='p-2 border-none outline-none' onChange={(e) => setDeposite(e.target.value)}/>
            <button className='bg-black hover:bg-slate-800 text-white rounded-3xl p-4' onClick={handleDeposite}>
                Deposite
            </button>
        </div>

        <div className='flex flex-col items-start bg-yellow-400 p-16 gap-4 rounded-2xl text-black text-2xl font-bold'>   {/* second input box here */}
            <label htmlFor="">
                Withdraw Money
            </label>
            <input type="number" placeholder='Withdraw' value={withdraw} className='p-2 outline-none' onChange={(e) => setWithdraw(e.target.value)}/>
            <button className='bg-black hover:bg-slate-800 text-white rounded-3xl p-4' onClick={handleWithdraw}>
                Withdraw
            </button>
        </div>
       </div>
    </div>
  )
}




