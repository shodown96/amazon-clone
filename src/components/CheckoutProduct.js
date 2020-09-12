import React, { Component } from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star'
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useStateValue } from '../context_api/StateProvider';

// function CheckoutProduct({id, title, image, price, rating}) {
//     const [{basket}, dispatch] = useStateValue();
//     const removeFromBasket = () => {
//         console.log(basket)
//         // remove the item from the basket
//         dispatch({
//             type: "REMOVE_FROM_BASKET",
//             id,
//         })
//     }

//     return (
//         // <div className="checkoutProduct" key={id}>
//         <div className="checkoutProduct">
//             <img src={image} alt="" className="checkoutProduct__image"/>
//             <div className="checkoutProduct__info">
//                 <p className="checkoutProduct__title">{title}</p>
//                 <p className="checkoutProduct__price">
//                     <small>$</small>
//                     <strong>{price}</strong>
//                 </p>
//                 <div className="checkoutProduct__rating">
//                     {Array(rating).fill().map( (_,i) =>{
//                         return <StarIcon key={i}/>
//                     })}
//                 </div>
//                 <button onClick={removeFromBasket}>Remove from Basket</button>
//             </div>
//         </div>
//     )
// }

class CheckoutProduct extends Component {
    state = {}
    // componentDidMount = ()=>{
    //         AOS.init({
    //             // initialise with other settings
    //             duration : 1000,
    //             once:true,
    //             ease:"ease-in-out"
    //           });
    //         // AOS.init();
    //         // AOS.refresh();

    //     }

    render(){
          // eslint-disable-next-line
        const {id, title, image, price, rating, hideButton, basket, dispatch} = this.props;
        // console.log(dispatch)
        // const [{basket}, dispatch] = this.state;
        const removeFromBasket = () => {
            // console.log(basket)
            // remove the item from the basket
            dispatch({
                type: "REMOVE_FROM_BASKET",
                id,
            })
        }

    return (
        // <div className="checkoutProduct" key={id}>
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map( (_,i) =>{
                        return <StarIcon key={i}/>
                    })}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )}
}
export default CheckoutProduct
