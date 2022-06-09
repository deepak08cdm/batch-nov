import { listClasses } from '@mui/material'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import List from './List'
import { addToList } from '../Redux/Action'

function TodoList() {
    const [item,setItem] = useState('')
    const [list,setList] = useState([])
    const dispatch = useDispatch()// deepak
    const navigate = useNavigate()
    const handleAddClick = ()=>{
        navigate(`/${item}`)
        dispatch(addToList(item))     // dispatch({type:'ADDITEMTOLIST',payload:'deepak'})
    }
    const handleElementClick = (index)=>{
        const changedArr = list.map((element,i)=>{
            if(i===index){
                return({...element,status:!element.status})
            }
            return element
        })
        setList(changedArr)
    }
  return (
    <div>
        add item to list <input value={item} onChange={(e)=>{setItem(e.target.value)}}/>
        <br/>
        <button onClick={handleAddClick}>Add</button>
        <br/>
        <ul>
        {/* {
            list.length>0 &&
            list.map((element,index)=>{
                return (<li onClick={()=>{handleElementClick(index)}} style={{textDecoration: element.status?'line-through':''}}>{element.name}</li>)
            })
        } */}
        </ul>
        <List/>
        {/* <button onClick={()=>{navigate('/signUp')}}>open signup form</button> */}
    </div>
  )
}

export default TodoList