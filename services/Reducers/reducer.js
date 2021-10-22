import {ADD_TO_CART,REMOVE_FROM_CART} from "../Constant"
const initialState={
    cartData:[]
}
export default function cartItems(state=[],action){
    switch(action.type){
       
        case ADD_TO_CART:
            // console.warn("reducer",action);
            return[
                ...state,
                {cartData:action.data}
    ]
    case REMOVE_FROM_CART:
        state.pop();
            // console.warn("reducer",action);
            return[
                ...state,
                
    ]
            default:
                return state
    }
}