import React from 'react'
import ContextProvider from './ContextProvider'
import Parent from './Parent'
function Main() {
  return (
    <ContextProvider>
      <Parent/>
    </ContextProvider>
  )
}

export default Main