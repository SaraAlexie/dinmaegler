/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from '@reach/router'
import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";


const LoginIcon = () => {

    const { token, logout } = useContext(TokenContext)

    const link = css`
        text-decoration: none;
    `

    const loginBtn = css`
        background-color: #162A41;
        color: white;
        font-size: 1em;
        display: flex;
        align-items: center;
        margin-top: 1em;
    `

    return (
        <Link to={'/login'} css={link} onClick={(token) => logout()}>
            <span css={loginBtn}>
                <BsFillPersonFill />
                {token ? "Log ud" : "Log ind"}
            </span>
        </Link>
    );
}
 
export default LoginIcon;