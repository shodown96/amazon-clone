import React, { useEffect } from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star'
import { useStateValue } from '../context_api/StateProvider'
import AOS from "aos";
import "aos/dist/aos.css";

function Product({id, title, image, price, rating}) {

    useEffect(() => {
        AOS.init({
            // initialise with other settings
            duration : 1000,
            once:true
          });
        // AOS.init();
        AOS.refresh();
    });

    // const [state, dispatch] = useStateValue();
    // eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue();
     const addToBasket = () => {
        // console.log("This is the basket >>>", basket)
        //  dispatch the item into the data layer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id,
                title,
                image,
                rating,
                price,
            }
        })
     }
    return (
        <div className="product" key={id} data-aos="fade-up" data-aos-delay={(id*100).toString()}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {Array(rating).fill().map( (_,i) =>{
                    return <StarIcon key={i}/>
                })}
                </div>
            </div>
            <img src={image} alt=""/>
            {/* https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SL1301_.jpg */}
            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product
