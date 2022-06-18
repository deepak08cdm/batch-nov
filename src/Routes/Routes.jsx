import React from 'react'
import {Routes as Rr, Route} from 'react-router-dom'
import SignUpForm from '../Component/SignUpForm'
import TodoList from '../Component/TodoList'
import Navbar from '../Component/Navbar/Navbar';
import List from '../Component/List';
import RouterList from '../Component/RouterList';
import Table from '../Component/Table'
import Main from '../Component/Context/Main.jsx'

function Routes() {
  return (
    <>
    {/* <Navbar/> */}
    <Rr>
      <Route path='/' element={<TodoList/>} />
      <Route path='/data' element = {<Table/>} />    // : specifies that it is dynamic and pass some value in it
      <Route path='/signUp' element={<SignUpForm/>} />
      <Route path='/signUp/name' element={<TodoList/>}/>
      <Route path='/context' element={<Main/>}/>
      {/* <Route path='*' element={<SignUpForm/>}/> */}
    </Rr>
    </>
  )
}

export default Routes


// actions :- there are js objects
// reducere :- are the pure function that change the or mutate the state
// store :- stoarage hourse for whole react