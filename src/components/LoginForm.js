/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import { navigate } from '@reach/router';
import LoginExtras from './LoginExtras';


const LoginForm = () => {

    const { login } = useContext(TokenContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        axios.post("https://dinmaegler.herokuapp.com/auth/local", data)
            .then(response => {
                if(response.status === 200) {
                    login(response.data)
                    navigate(`/`)
                }
            })
            .catch(error => {
                alert("You did not provide correct login information...")
                console.log(error);
            })
    };

    const headline = css`
        text-align: center;
    `

    const inputForm = css`
        width: 57.5em;
        margin: 5em auto;
        border: solid 1px #D3DEE8;
        padding: 1em 0 3em;
        box-shadow: 0px 10px 30px rgba(0, 115, 225, 0.06);
    `

    const formSection = css`
        width: 33.75rem;
        margin-left: auto;
        margin-right: auto;
    `

    const input = css`
        display: block;
        height: 40px;
        width: 33.75rem;
        margin: 0.5em 0 1.5em;
        border: solid 1px #D3DEE8;
    `

    const loginBtn = css`
        width: 34.25rem;
        height: 40px;
        color: white;
        background-color: #162A41;
        border: #162A41;
        margin: 1em auto;
        padding: 0;
    `

    return (
        <form onSubmit={handleSubmit(onSubmit)} css={inputForm}>
            <h2 css={headline}>Log ind på din konto</h2>
            <section css={formSection}>
                <label htmlFor="identifier">Email</label>
                <input css={input} placeholder="Email" type="email" name="identifier" id="identifier" {...register ("identifier")} />
            </section>
            <section css={formSection}>
                <label htmlFor="password">Password</label>
                <input placeholder="Password" css={input} type="password" name="password" id="password" {...register ("password")} />
                <button css={loginBtn} type="submit">Log ind</button>
            </section>
            <LoginExtras />
        </form>
    );
}
 
export default LoginForm;