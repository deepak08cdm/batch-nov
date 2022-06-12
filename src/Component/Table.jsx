import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/Action'
function Table() {
    // const [data, setData] = useState([])
    const dispatch = useDispatch()
    const data = useSelector((state)=> {
        console.log(state)
        return(state?.stateManagement?.data)
    })   // undefined   // error cannot find data of undefined
    // const fetchData = async()=>{
    //    try{
    //     const result = await axios.get('https://jsonplaceholder.typicode.com/posts' )
    //     // console.log(data)
    //     setData(result.data)
    // }
    //    catch(err){
    //        console.log(err)
    //    }
    // }
  return (
    <div>
        { <button onClick = {()=>{dispatch(fetchData())}}>load data</button>}
        {data && <table border='2px solid black' style={{width:'100%'}}>
        <thead>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    title
                </th>
                <th>
                    body
                </th>
            </tr>
        </thead>
        <tbody>
            { data.map((data)=>{
                return(
                    <tr>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
            </tr>
                )
            })}
        </tbody>
    </table>}
    </div>
  )
}

export default Table