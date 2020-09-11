import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../context_api/StateProvider';
import { useHistory } from 'react-router-dom';
// import { getBasketTotal } from '../context_api/reducer';

function Subtotal() {
    const [{basket}] = useStateValue();
    const history = useHistory();
    // console.log(basket)
    var sum = 0;
    basket.forEach((item)=>{
        sum += Number(item.price);
    })
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) =>{
                return(<>
                {/* Part of the homework */}
                    <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox" id=""/>
                        This order contains a gift
                    </small>
                </>)
            }}
            decimalScale={2}
            value={sum} //part of the homework
            // value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"} />

            <button onClick={e =>{history.push("/payment")}}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
