import { type } from '@testing-library/user-event/dist/type'
import React,{useState} from 'react'
import './Navbar.css'

function Navbar(props) {
  const [count, setCount] = useState(0)
  //background-color
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Always expand</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
        <form>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
//onclick  onClick

// function useState (initial){
//   let a = initial
//   const b = (value)=>{
//     a=value
//   }
//   return [a, b]
// }

//React.createElement(element type, props, children)
// jsx- recreated html elements in react so that we can use simpler syntax
// props are immutable

// react says I cannot understand normal variable change , I have spreacial variable called STATE so when we change state react will update