import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./config/config";
import { useStateValue } from "./context_api/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


import Home from "./containers/Home";
import Checkout from "./containers/Checkout";
import Login from "./containers/Login";
import Payment from "./containers/Payment";
import Orders from "./containers/Orders";
import Toast from "./components/Toast";

const api_key =
  "pk_test_51HPyn0FyNz3IOs9CbTEzGzGabecd5LM6vokVSiWmyVpHJbX3hM5hDX8zDrzmQ9517Wwrz1u7QJz31FydlrmRXbEl00vsz7YsdJ";

const promise = loadStripe(api_key);

function App() {
  // eslint-disable-next-line
  const [{ user, toast }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log('THE USER IS >>> ', authUser.email);
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]); // }, []) not })

  const [open, setOpen] = useState(false)
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
   setOpen(false);
  };
  useEffect(()=> setOpen(toast.open),[toast])

  return (
    // BEM
    <BrowserRouter>
      <ScrollToTop />
      <Toast open={open} message={toast.message} handleClose={handleClose}/>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

          {/* <Route path="/checkout" component={Checkout}/>
        <Route exact path="/" component={Home}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
