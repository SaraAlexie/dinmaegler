/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Menu from './Menu';
import { Link } from "@reach/router";


const Navbar = () => {

    const navStyle = css`
        width: 62em;
        margin-right: auto;
        margin-left: auto;
        height: 5.625em;
        display: flex;
        justify-content: space-between;
    `

    const headline = css`
        text-transform: uppercase;
        text-decoration: none;
        color: #162A41;
        padding-top: 1em;
    `

    return (
        <header css={navStyle}>
            <Link to={'/'} css={headline}>
                <img src="../images/logo.png" alt="Logo" />
            </Link>
            <Menu />
        </header>
    );
}
 
export default Navbar;