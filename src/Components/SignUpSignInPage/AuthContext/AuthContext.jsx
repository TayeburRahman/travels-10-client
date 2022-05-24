import { createContext } from "react";
import useFirebaseAuthFunctions from "../UseFirebaseAuthFunctions/useFirebaseAuthFunctions";

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const authValues = useFirebaseAuthFunctions()
    // console.log(authValues)
    return <AuthContext.Provider value={authValues}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider;