import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFromList } from '../Redux/Action'
function List() {
    // const params = useParams()
    // console.log(params,'list component')
    const dispatch = useDispatch()
    const list = useSelector((state)=> state)
    const handleDelete = (value,index)=>{
      const lists = list.reducer.list.filter((item)=> item!==value)
      dispatch(deleteFromList(lists))
    }


  return (
    <div>
        <h2>This is List Component</h2>
            {/* {params.name} */}
            <ul>
              {list.reducer.list.map((element, key)=>{
                return(
                  <>
                  <li key={key}>{element} <button className='btn btn-secondary m2' onClick={()=>{handleDelete(element,key)}}><i className='fa'></i></button></li>
                  
                  </>
                )
              })}
            </ul>
    </div>
  )
}

export default List

//useEffect(()=>{},[])      componentDidmount
//useEffect(()=>{})         componentDidUpdate
//useEffect(()=>{},[state]) componentDidUpdate on sopecified state Change  
//useEffect(()=>{ return ()=>{}},[])   componentWillUnmount        // eventListerner