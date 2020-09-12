import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../context_api/StateProvider';
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    
    const related = [
        {
            id:5,
            title:"CHEPULA 13 in 1...",
            price:"17.33",
            image:"https://images-na.ssl-images-amazon.com/images/I/61yLAdR0n8L._AC_UL100_SR100,100_.jpg",
            rating:4
        },
        {
            id:5,
            title:"Loading Carry Case for...",
            price:"32.33",
            image:"https://images-na.ssl-images-amazon.com/images/I/71BvDYCvBJL._AC_UL100_SR100,100_.jpg",
            rating:3
        },

        {
            id:5,
            title:"UPGREEN Switch Screen",
            price:"7.88",
            image:"https://images-na.ssl-images-amazon.com/images/I/61QiUZp-cSL._AC_UL405_SR405,405_.jpg",
            rating:3
        }
    ]

    return (
        <div className="checkout">
            <div className="checkout__left">
                {/* <img src="https://i.pinimg.com/originals/fa/69/b0/fa69b0a08743455f9e5978726044ee00.jpg"
                 alt="" className="checout__ad" height="100px" width="100%"/> */}
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                 alt=""  class="checkout__ad"   height="100px" width="100%"/>
                 <div className="">
                 <h3>{ "Hello " + (user ? user.email : "Guest") }</h3>
                     <h2 className="checkout__title">Your Shopping Basket</h2>
                     {basket.length > 0? 
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
                     </FlipMove>: 
                     <h3>Your Basket is Empty <span role="img" aria-label="sad">😩</span>!!!</h3>
                     }
                     
                 </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
                <div className="checkout__relatedItems">
                {related.map(item => { return(
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
                </div>
            </div>
        </div>
    )
}

export default Checkout
