import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import { useStateValue } from './StateProvider';
import { auth } from './components/Firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51O6P1HSDDy6YXdP9Kzct8f4kwJ5xLnTd5K7NbJt0C28UKdolbDCl7z5A3ObBeGNiKI9KQOVF0e3femssCh7157em00rHCNpPb2');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    //It will run only once the app component loads...  

    auth.onAuthStateChanged(authUser =>{
      console.log('The user is >>>', authUser);

      if (authUser) {
        //the user is just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null

        })
      }
    })
  }, [])
 
  return (
    <div className="app">
     <Header />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
      <Route path='/login' element={<Login />}></Route>
      
      <Route path='/payment' element={<Elements stripe={promise}><Payment /></Elements>}></Route>
     
     </Routes>
     
    </div>
  );
}

export default App;
