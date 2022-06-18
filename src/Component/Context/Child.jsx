import React from 'react'
import { useContext } from 'react'
import {CounterContext} from './ContextProvider'
function Child() {
  const {counter,updateCounter} = useContext(CounterContext)
  console.log("inisde child", counter)
  return (
    <button onClick={()=>{updateCounter(counter+1)}}>inc</button>
  )
}

export default Child