import React, {createContext, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import isTokenValid from "../helpers/isTokenValid";

export const AuthContext = createContext({});

function AuthContextProvider ({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token && isTokenValid(token)) {
            getUserData(token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
        }
    }, []);

    function signIn(JWT) {
        localStorage.setItem("token", JWT);
        getUserData(JWT, './profile');
        console.log("de gebruiker is ingelogd");
    }

    function signOut() {
        toggleIsAuth({
            ...isAuth,
            isAuth: false,
            user: null,
            status: "done",
        });
        localStorage.clear();
        console.log("de gebruiker is uitgelogd");
        history.push("/");
    }

    async function getUserData(token, redirectUrl) {
        try {
            const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user',
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
            toggleIsAuth({
                ...isAuth,
                isAuth:true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                },
                status: "done",
            })
            if (redirectUrl) {
                history.push(redirectUrl);
            }
        } catch(e) {
            console.error(e);
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
        }
    }

    const data = {
        auth: isAuth.isAuth,
        user: isAuth.user,
        login: signIn,
        logout: signOut,
    }

    return (
    <AuthContext.Provider value={data}>
        {isAuth.status === "done" ? children : <h2>Loading....</h2>}
    </AuthContext.Provider>
)
}

export default AuthContextProvider;