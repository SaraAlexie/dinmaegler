/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from '@reach/router';


const LoginExtras = () => {

    const loginStuff = css`
        margin: 0 auto;
        width: 33.75em;
    `

    const loginWith = css`
        margin: 2em 0 1em;
    `

    const socials = css`
        display: flex;
        justify-content: space-between;
    `

    const headline = css`
        text-align: center;
        margin-top: 5em;
    `

    const link = css`
        text-decoration: none;
        color: #2F80ED;
    `

    const socialBox = css`
        color: white;
        width: 10.625em;
        height: 3.75em;
        text-align: center;
        border: none;
    `

    return (
        <section css={loginStuff}>
            <p css={loginWith}>Log ind med</p>
            <section css={socials}>
                <button css={socialBox} style={{backgroundColor: "#DD4B39"}}>Google</button>
                <button css={socialBox} style={{backgroundColor: "#3B5999"}}>Facebook</button>
                <button css={socialBox} style={{backgroundColor: "#162A41"}}>Twitter</button>
            </section>
            <p css={headline}>
                Har du ikke en konto endnu? <Link to={"/opret"} css={link}>Opret en bruger</Link>
            </p>
        </section>
    );
}
 
export default LoginExtras;