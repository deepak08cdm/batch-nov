import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'

function RouterList(props) {
    const param = useParams()
    const [ value, setValue] = React.useState('')
    useEffect(()=>{
        console.log(param)
    },[])
    return (
        <>
        <h1>router component</h1>
        <h1>{value}</h1>
        </>
  )
}

export default RouterList