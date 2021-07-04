export default function productReducer(state,action){
    console.log(action)
    switch (action.type) {
      case "LOAD_DATA":
        return {
          ...state,
          products: action.payload.productData,
        };
      case "ADD_TO_CART":
        return {
          ...state,
          cart: state.cart.concat({
            product: { ...action.payload.product },
            quantity: 1,
            saveForLater: false
          }),
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter(
            (cartItem) => cartItem.product.id !== action.payload.productId
          ),
        };
      case "INCREASE_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((cartItem) => {
            if (cartItem.product.id === action.payload.productId) {
              return {...cartItem, quantity: cartItem.quantity + 1}
            } else return cartItem;
          }),
        };
      case "DECREASE_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((cartItem) => {
            if (cartItem.product.id === action.payload.productId) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            } else return cartItem;
          }),
        };
      case "TOGGLE_SAVE_LATER": 
        return {
            ...state,
            cart: state.cart.map(cartItem => {
                if(cartItem.product.id === action.payload.productId){
                    return {...cartItem, saveForLater : !cartItem.saveForLater}
                } else return cartItem
            })
        }
      default:
        return state;
    }
}