import React, { useEffect} from 'react';
import './App.css';
import  Header from './Header'
import Home from './Home'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import CheckOut from './Checkout/CheckOut';
import Login from './Login/Login';
import { auth } from './Login/firebase';
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import Payment from './Checkout/Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Orders from './Checkout/Orders';

const promise = loadStripe('pk_test_51HOT8ADSHvomRkCENu4Bdwi5WYUzVviosnXeoxzwDD6aoHg8s9ZyFGxaK2uQSagY63pHWDZWvMZu3TrQhcKwMCRc00zA1EpKj6');

function App() {

  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>>', authUser);

      if(authUser){
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      } else {

        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })

  }, [])

  return (
    <div className='App__home'>
    <Router>
        <Switch>
        <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
               <Payment />
            </Elements>
            <Footer />
          </Route>

          <Route path='/orders'>
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path='/checkout'>
            <Header />
            <CheckOut />
            <Footer />
          </Route>
          <Route path='/login'>
             <Login />
          </Route>
          <Route path='/'>
            <Header />
            <div className='App__home'>
            <Home />
            <Footer />
            </div>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
