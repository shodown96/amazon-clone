export const initialState = {
    basket: [],
    user:null,
    toast:{open:false, message:null}
};
// Selector
export const getBasketTotal = (basket)=> basket?.reduce((amount,item)=> Number(item.price) + amount, 0);


export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":

            return{
                ...state,
                basket: [...state.basket, action.item],
                toast:{open:true, message:"Item added"}
            };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket];
            
            if(index >= 0){
                newBasket.splice(index, 1);
                
            } else{
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in basket!`
                )
            }

            return{
                ...state,
                basket: newBasket,
                toast:{open:true, message:"Item removed"}
                // basket: state.basket.filter(item => item.id !== action.id) the id is the same for all items in cart with same id
            };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: [],
                toast:{open:true, message:"Cart Emptied"}
            }
        case "SET_USER":
            return {
                ...state,
                user:action.user,
                toast:{open:true, message:"User Logged in"}
            }
        case "PAYMENT_SUCCESSFUL":
            return {
                ...state,
                toast:{open:true, message:"Payment successful"}
            }

        default:
            return state
    }

}
export default reducer;
