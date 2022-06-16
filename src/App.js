import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Card from './Component/Card/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Typography } from '@mui/material';
import IphoneImage from './Assets/Images/iphone13.jpg'
import { useState } from 'react';
import Main from './Child';
import SignUpForm from './Component/SignUpForm';
import Table from './Component/Table';
import TodoList from './Component/TodoList';
import Routes from './Routes/Routes';

const values = [
  {title:'Card1', body:'Hello, welcome to card1', imgSrc:'./Assets/Images/iphone13.jpg'},
  {title:'Card2', body:'Hello, welcome to card2', imgSrc:'./Assets/Images/iphone13.jpg'},
  {title:'Card3', body:'Hello, welcome to card3', imgSrc:'./Assets/Images/iphone13.jpg'},
  {title:'Card4', body:'Hello, welcome to card1', imgSrc:'./Assets/Images/iphone13.jpg'},
  {title:'Card5', body:'Hello, welcome to card2', imgSrc:'./Assets/Images/iphone13.jpg'},
  {title:'Card6', body:'Hello, welcome to card3', imgSrc:'./Assets/Images/iphone13.jpg'}
]
function App() {
  const [counter, setCounter] = useState(0)
  console.log('inside app')
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>increment</button>
      <Main data = {counter}/>
      {/* <Navbar/>
        <Routes/> */}
    </div>
  );
}

export default App;