import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,reset,incrementByAmount } from '../features/counter/counterSlice'


const Counter = () => {
    const [modal, showModal] = useState(false)
    const[amount, setAmount] = useState("")
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    
    const handleIncrement = () => {
        dispatch(increment())
        
        
    }
    const handleDecrement = () => {
        if (count <= 0){
            return
        }
        dispatch(decrement())
        
    }
    const handleReset = () => {
        dispatch(reset())
    }
    const handleAmount = () => {
        //if value is string return please enter a number on the screen not a alert
       if (isNaN(amount) || amount.trim() === "") {
        showModal(true);
        
       }
        const value = amount
        dispatch(incrementByAmount(value))
        setAmount("")
    }
    if (modal) {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="border p-6 rounded">
                <h2>Abe number dalna h 😒</h2>

                <button
                    onClick={() => showModal(false)}
                >
                    OK
                </button>
            </div>
        </div>
    );
}
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} type="text" placeholder='Enter Amount' />
      <button onClick={handleAmount}>Send</button>
    </div>
  )
}

export default Counter
