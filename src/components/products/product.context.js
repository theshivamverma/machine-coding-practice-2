import { createContext, useContext, useReducer, useEffect } from "react"
import { productReducer } from "../products"

const ProductContext = createContext()

const initialState = {
    products: [],
    cart: []
}

export function ProductProvider({ children }){

    const [state, dispatch] = useReducer(productReducer, initialState)

    function getData(){
        fetch("data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then(function (response) {
            console.log(response);
            return response.json();
          })
          .then(function (myJson) {
            dispatch({ type: "LOAD_DATA", payload: { productData: myJson.productData } })
          });
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <ProductContext.Provider value={{ productsData: state, productDispatch: dispatch }} >
            { children }
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext)