import Contain from "../component/Contain";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import Details from "../component/Details";
import styles from "../styles/SignUP.module.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form"
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Main from "../component/Main"
import AuthContext from "../component/AuthContext";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const signUp = () => {
    const {signup, user, error} = useContext(AuthContext);
    
    const schema = Yup.object().shape({
        username: Yup.string().min(4).max(12).required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(8).max(32).required(),
        confirmPassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref("password")], "Must match the password field")
    })
    
    const router = useRouter();
    
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => toast.error(error, {toastId: "1"}) [error]);

    return(
    <Contain>
        <Details />
        <Main>
        <div className={styles.content}> 
        <div>
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
      </div>{!user? <span>
            <form onSubmit={handleSubmit(signup)}>
                <h2 className={styles.signUp}>Sign Up</h2>
                <div>
                    <label htmlFor="username" >Username:</label>
                    <input {...register("username")} type="text" name="username"/>
                    <span className={styles.error}> {errors.username?.message}</span>
                </div>

                <div >
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" {...register("email")}/>
                    <span className={styles.error}> {errors.email?.message}</span>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" {...register("password")}/>
                    <span className={styles.error}> {errors.password?.message}</span>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm password:</label>
                    <input {...register("confirmPassword")} type="password" name="confirmPassword"/>
                    <span className={styles.error}> {errors.confirmPassword?.message}</span>
                </div>
                <div>
                <input disabled={isSubmitting} type="submit" className={styles.submitButton}/></div>
            </form>
            <h5>If you already have an account, <button ><Link href="/login"><a className={styles.btn}>Log in here</a></Link></button></h5> </span> :
            <h2> You are already have an account</h2> }
        </div></Main>
    </Contain>
    )
}

export default signUp;
