import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import CartContext from './Components/CartTourPlan/CartContext';
import AllRoute from "./Components/Route/AllRoute";
import AuthProvider from "./Components/SignUpSignInPage/AuthContext/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartContext>
        <ScrollToTop smooth />
        <AllRoute />
      </CartContext>
    </AuthProvider>
  );
}

export default App;
