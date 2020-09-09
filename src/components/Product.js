import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star'
import { useStateValue } from '../context_api/StateProvider'

function Product({id, title, image, price, rating}) {
    // const [state, dispatch] = useStateValue();
    const [{basket}, dispatch] = useStateValue();
     const addToBasket = () => {
        console.log("This is the basket >>>", basket)
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
        <div className="product" key={id}>
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
