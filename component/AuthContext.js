import { createContext, useState, useEffect } from "react";
import router, { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [ error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => checkUserLoggedIn(), [])

    const signup = async (user) => {
        const res = await fetch("http://localhost:3000/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
        const data = await res.json();

        if(res.ok) {
            setUser(data.user);
            router.push("/");
        } else {
            setError(data.message);
        }
    }

    const login = async ({ username: identifier, password}) => {
        const res = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                identifier,
                password
            })
        });
        const data = await res.json();

        if(res.ok) {
            setUser(data.user);
            setSuccess(data.success)
            router.push("/")
        } else {
            setError(data.message);
        }
    };

    const signout = async () => {
        const res = await fetch("http://localhost:3000/api/signout", {
            method: "POST",
        });
        if (res.ok) {
            setUser(null);
            router.push("/");
        }
    };

    const checkUserLoggedIn = async (user) => {
        const res = await fetch("http://localhost:3000/api/user");
        const data = await res.json();

        if (res.ok) {
            setUser(data.user);
            console.log(user)
        } else {
            setUser(null)
        }
    };
    return (
        <AuthContext.Provider value={{ user, error, success, signup, login, signout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;