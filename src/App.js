import React from 'react';
import AllRoute from "./Components/Route/AllRoute";
import ScrollToTop from "react-scroll-to-top";
import AuthProvider from "./Components/SignUpSignInPage/AuthContext/AuthContext";
import CartContext from './Components/CartTourPlan/CartContext';

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
