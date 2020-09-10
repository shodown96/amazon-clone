import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../context_api/StateProvider';
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    

    return (
        <div className="checkout">
            <div className="checkout__left">
                {/* <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/DCC_Amazon1._CB423492668_.jpg" alt="" className="checout__ad"/> */}
                <img src="https://i.pinimg.com/originals/fa/69/b0/fa69b0a08743455f9e5978726044ee00.jpg"
                 alt="" className="checout__ad" height="100px" width="100%"/>
                 <div className="">
                 <h3>{ "Hello " + (user ? user.email : "Guest") }</h3>
                     <h2 className="checkout__title">Your Shopping Basket</h2>
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
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
