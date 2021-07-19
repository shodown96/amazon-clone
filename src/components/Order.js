import React, { useEffect } from 'react'
import '../css/Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import AOS from "aos";
import "aos/dist/aos.css";

function Order({order}) {
    useEffect(() => {
        AOS.init({
            // initialise with other settings
            duration : 1000,
            once:true
          });
        // AOS.init();
        AOS.refresh();
    });

    return (
        <div className="order"  data-aos="fade-down" data-aos-delay={(order.id*100).toString()}>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket.map(item => {
                return(
                <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton/>
                )

            })}
            
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />  
        </div>
    )
}

export default Order
