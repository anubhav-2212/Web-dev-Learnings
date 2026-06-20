import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    
    const handleIncrement = () => {
        dispatch(increment())
        
        
    }
    const handleDecrement = () => {
        dispatch(decrement())
        
    }
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      
    </div>
  )
}

export default Counter
