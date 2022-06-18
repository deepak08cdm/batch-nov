import React,{createContext} from 'react'
export const CounterContext = createContext()

function ContextProvider(props) {
  const [counter, setCounter] = React.useState(0)
  return (
    <CounterContext.Provider value={{counter:counter, updateCounter:(val)=>{setCounter(val)}}} >
      {props.children}
    </CounterContext.Provider>
  )
}

export default ContextProvider