/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from '@reach/router'
import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";

const Menu = () => {

    const { token } = useContext(TokenContext)

    const items = css`
        list-style: none;
        display: flex;
        position: relative;
        top: 20%;
    `

    const listItem = css`
        margin-left: 2.5em;
        color: #333333;
        text-decoration: none;
    `

    const favourites = css`
        margin-left: 2.5em;
        color: #333333;
        text-decoration: none;
        display: ${token ? "flex" : "none"};
    `

    return (
        <nav>
            <ul css={items}>
                <Link to={'/properties'} css={listItem}>
                    <li>
                        Boliger til salg
                    </li>
                </Link>
                <Link to={'/medarbejdere'} css={listItem}>
                    <li>
                        Mæglere
                    </li>
                </Link>
                <Link to={'/favoritter'} css={favourites}>
                    <li>
                        Mine favoritter
                    </li>
                </Link>
                <Link to={'/kontakt'} css={listItem}>
                    <li>
                        Kontakt
                    </li>
                </Link>
            </ul>
        </nav>
    );
}
 
export default Menu;