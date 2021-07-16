import React, { useState, useEffect  } from 'react'
import "./Payment.css"
import { useStateValue } from '../context_api/StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import {CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../context_api/reducer';
import axios from '../axios';
import { db } from "../config/config";
import FlipMove from 'react-flip-move';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(null);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = () => {
            // Stripe expects the total in a currencies subunits
            const amount = Math.floor(getBasketTotal(basket) * 100)
        
            axios.post(`/payments/create?total=${amount}`)
            .then(r => setClientSecret(r.data.clientSecret))
            .catch(e => console.log(e))
        }
      getClientSecret();
    }, [basket]);

    useEffect(() => {
        if(!user) history.push("/login")
    })

    // clientSecret && console.log("THE SECRET IS >>>", clientSecret);
    // user && console.log("👱", user.email);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setProcessing(true);
      // eslint-disable-next-lin
      await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then(({ paymentIntent }) => {
          // paymentIntent = payment confirmation

          db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });

          setSucceeded(true);
          setError(null);
          setProcessing(false);

          dispatch({
            type: "EMPTY_BASKET",
          });

          history.replace("/orders");
        })
        .catch((e) => {
          setError(e);
          setSucceeded(false);
          setProcessing(false);
          console.log(e.response.message);
        });
    };

    const handleChange = (e) => {
      setDisabled(e.empty);
      setError(e.error ? e.error.message : "");
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout { <Link to="/checkout">{basket?.length} items</Link>} 
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h1>Delivery Address</h1>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                    <FlipMove enterAnimation="accordionVertical" className="flip-wrapper">
                        {basket.map(item => { return(
                            <CheckoutProduct
                                    dispatch={dispatch}
                                    basket={basket}
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                    rating={item.rating} />
                                    )
                        })}
                    </FlipMove>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat renderText={(value) =>{
                                    return(<>
                                    {/* Part of the homework */}
                                        <h3>Order Total <strong>{value}</strong></h3>
                                        {/* <small className="subtotal__gift">
                                            <input type="checkbox" id=""/>
                                            This order contains a gift
                                        </small> */}
                                    </>)
                                }}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"} />
                                <button disabled={processing || disabled || succeeded || clientSecret === null}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
