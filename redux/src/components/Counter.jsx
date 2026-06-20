import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,reset } from '../features/counter/counterSlice'


const Counter = () => {
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
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}

export default Counter
