/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as Sentry from "@sentry/react";
import Banner from '../components/Banner';


const Register = () => {


    const inputForm = css`
        width: 57.5em;
        margin: 5em auto;
        border: solid 1px #D3DEE8;
        padding: 1em 0 3em;
        box-shadow: 0px 10px 30px rgba(0, 115, 225, 0.06);
    `

    const headline = css`
        text-align: center;
        margin: 2em 0;
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
        <Sentry.ErrorBoundary>
            <Banner headline={"Opret bruger"} />
            <form css={inputForm}>
                <h2 css={headline}>Opret bruger hos Din Mægler</h2>
                <section css={formSection}>
                    <label htmlFor="email">Fulde navn</label>
                    <input css={input} type="text" name="name" id="name" />
                </section>
                <section css={formSection}>
                    <label htmlFor="email">Email adresse</label>
                    <input css={input} type="email" name="email" id="email" />
                </section>
                <section css={formSection}>
                    <label htmlFor="password">Password</label>
                    <input css={input} type="password" name="password" id="password" />
                </section>
                <section css={formSection}>
                    <label htmlFor="confirmPassword">Bekræft password</label>
                    <input css={input} type="password" name="confirmPassword" id="confirmPassword" />
                    <button css={loginBtn} type="submit">Opret bruger</button>
                </section>
            </form>
        </Sentry.ErrorBoundary>
    );
}
 
export default Register;