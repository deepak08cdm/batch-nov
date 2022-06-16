import React from 'react'

function Child(props) {
    console.log('inside child')
  return (
    <div>{props.data}</div>
  )
}

export default React.memo(Child)