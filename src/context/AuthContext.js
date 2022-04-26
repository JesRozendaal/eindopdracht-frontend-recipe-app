import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

//endpoint backend: https://frontend-educational-backend.herokuapp.com/
//signup: /api/auth/signup
// nodig: {
//    "username": "piet",
//    "email" : "piet@novi.nl",
//    "password" : "123456",
//    "role": ["user"]
// }

export const AuthContext = createContext({});

function AuthContextProvider ({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
    });
    const history = useHistory();

    function signIn() {
        toggleIsAuth({
            ...isAuth,
            isAuth: true,
        });
        console.log("de gebruiker is ingelogd");
        history.push("/profile");
    }

    function signOut() {
        toggleIsAuth({
            ...isAuth,
            isAuth: false,
        });
        console.log("de gebruiker is uitgelogd");
    }

    const data = {
        auth: isAuth.isAuth,
        user: isAuth.user,
        login: signIn,
        logout: signOut,
    }

    return (
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
)

}

export default AuthContextProvider;