import { useContext } from "react"
import { CartContext } from "./CartContext";

const useTourPlan = () => {
    return useContext(CartContext)
}
export default useTourPlan;