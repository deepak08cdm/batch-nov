import React, { useEffect,useState } from 'react'
import axios from 'axios'
function Table() {
    const [data, setData] = useState([])
    const fetchData = async()=>{
       try{
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // console.log(data)
        setData(result.data)
    }
       catch(err){
           console.log(err)
       }
    }
    // useEffect(()=>{fetchData()},[])
  return (
    <div>
        {data.length==0 && <button onClick = {fetchData}>load data</button>}
        {data.length>0 && <table border='2px solid black' style={{width:'100%'}}>
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