import { getUser, storeUser } from '../../core/storage';
import { createContext, useContext, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Routes } from '../../core/routing';
import App from '../App/App';
import LoginPage from '../Onboarding/Login/LoginPage';


const AuthContext = createContext();

const AuthProvider = () => {

    const [auth, setAuth] = useState(getUser());
    

    const updateAuth = (auth) => {
        storeUser(auth);
        setAuth(auth);
    };

    const logout = () => {updateAuth(null)};

    if (auth) {
        const { user, token } = auth;
        return (
        <AuthContext.Provider value={{user, token, logout }}>
            <App/> 
        </AuthContext.Provider>
        );
    }

    return (
        <Switch>
           <Route path={Routes.Login}><LoginPage setUser={updateAuth}/></Route>  
           <Redirect to={Routes.Login} />
        </Switch>
    )

};

const useAuth = () => {
    return useContext(AuthContext);
}

export {
    useAuth,
}

export default AuthProvider;