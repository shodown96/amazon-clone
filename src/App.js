import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { auth } from './config/config';
import { useStateValue } from './context_api/StateProvider';

function App() {
  
  // eslint-disable-next-line
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // console.log('THE USER IS >>> ', authUser.email);
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])  // }, []) not })

  return (
    // BEM
    <BrowserRouter>
    <div className="App">
      <Switch>

        <Route path="/login">
            <Login/>
        </Route>

        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>

        <Route path="/">
          <Header/>
          <Home/>
        </Route>

        {/* <Route path="/checkout" component={Checkout}/>
        <Route exact path="/" component={Home}/> */}

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
