import { createContext } from 'react';
import useCartFunction from './useCartFunction';


export const CartContext = createContext({})

const CartProvider = ({ children }) => {
    const cartValues = useCartFunction()
    // console.log(cartValues)
    return <CartContext.Provider value={cartValues}>
        {children}
    </CartContext.Provider>
};
export default CartProvider;