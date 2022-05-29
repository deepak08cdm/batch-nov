import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Card from './Component/Card/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Typography } from '@mui/material';
import IphoneImage from './Assets/Images/iphone13.jpg'
import { useState } from 'react';
import SignUpForm from './Component/SignUpForm';
import Table from './Component/Table';

const values = [
  {title:'Card1', body:'Hello, welcome to card1', imgSrc:'./Assets/Images/iphone13.jpg'},
  {title:'Card2', body:'Hello, welcome to card2', imgSrc:'./Assets/Images/iphone13.jpg'},
  {title:'Card3', body:'Hello, welcome to card3', imgSrc:'./Assets/Images/iphone13.jpg'},
  {title:'Card4', body:'Hello, welcome to card1', imgSrc:'./Assets/Images/iphone13.jpg'},
  {title:'Card5', body:'Hello, welcome to card2', imgSrc:'./Assets/Images/iphone13.jpg'},
  {title:'Card6', body:'Hello, welcome to card3', imgSrc:'./Assets/Images/iphone13.jpg'}
]
function App() {
  const [data, setData] = useState(null)
  return (
    <div className="App">
      {/* {!data && <button onClick={()=>{setData(values)}}>load data</button>}
        {data &&
          data.map((item)=>{
            return(
              <>
                {
                  item.title==='Card2' ? null : <Card title={item.title}>
                  <Typography variant='string'>
                    <div className='imageContainer'>
                      <img src={require(`${item.imgSrc}`)} />
                    </div>
                    {item.body}
                  </Typography>
                </Card>
                    
                }
              </>
            )
          })
        } */}
        <SignUpForm/>
        <Table/>
    </div>
  );
}

export default App;

// conditon? if true : if false