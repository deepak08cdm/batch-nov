import React, {useContext} from 'react'
import Child from './Child'
import {CounterContext} from './ContextProvider'

function Parent() {
  const value = useContext(CounterContext)
  console.log("inisde parent",value)
  return (
    <>
    <h1>{value.counter}</h1>
    <Child/>
    </>
  )
}

export default Parent