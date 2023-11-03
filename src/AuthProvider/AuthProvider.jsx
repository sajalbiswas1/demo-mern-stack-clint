import PropTypes from 'prop-types'; 

import { createContext } from "react";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const AuthInformation = {

    }
    return (
        <AuthContext.Provider value={AuthInformation}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;