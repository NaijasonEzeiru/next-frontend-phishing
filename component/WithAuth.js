import { Component, useContext } from "react";
import login from "../pages/login";
import AuthContext from "./AuthContext";

const withAuth = Component => {
    const Auth = (props) => {
        const {user} = useContext(AuthContext);
        if(!user) {
            return(
                <login />
            );
        }
        return (
            <Component {...props} />
        );
    };
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }
    return Auth
};

export default withAuth