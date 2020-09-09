import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    // BEM
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
        {/* <Route path="/checkout">
          <Checkout/>
        </Route>

        <Route path="/">
          <Home/>
        </Route> */}
        {/* <Route path="/checkout" component/> */}
        <Route path="/checkout" component={Checkout}/>
        <Route exact path="/" component={Home}/>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
