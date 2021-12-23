import Contain from "../component/Contain";
import Details from "../component/Details";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {useContext, useEffect } from "react";
import Link from "next/link";
import Main from "../component/Main";
import AuthContext from "../component/AuthContext";
import styles from "../styles/Login.module.css"
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const login = () => {

    const {login, user, error} = useContext(AuthContext);

    const validationSchema = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    useEffect(() => toast.error(error, {toastId: "1"}) [error]);

    return(
        <Contain>
        <Details />
        <Main>
        <div>
            {!user? <span>
            <h2>Log In</h2>
            <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

            <form onSubmit={handleSubmit(login)}>
                <div>
                    <label htmlFor="username" > Username:</label>
                    <input type="text" name="username" {...register("username")}></input>
                    <span className={styles.error}>{errors.username?.message}</span>
                </div>
                <div>
                    <label htmlFor="email" > Password:</label>
                    <input type="password" name="password" {...register("password")}></input>
                    <span className={styles.error}>{errors.password?.message}</span>
                </div>
                <input type="submit" />
            </form>
            <h5>Do not have an account? please <button><Link href="/signup" ><a className={styles.btn}>Sign up</a></Link></button>
                </h5> </span> :
                <h2> You are already logged in</h2>}

        </div>
        </Main>
        </Contain>
    )
} 

export default login