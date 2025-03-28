import { Children, createContext, useContext, useState } from "react";

var CartContext = createContext()

export function CartProvider({children}){

    var [cart, setCart] = useState([])

    var addToCart = (book) => {
        setCart((prevCart) => [...prevCart, book])
    }

    return <CartContext.Provider value={{cart, addToCart}}>
        {children}
    </CartContext.Provider>
}

export function useCart(){
    return useContext(CartContext)
}