/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import DmsLayout from './DmsLayout'
import QuickLinks from './QuickLinks'
import { useLocation } from '@reach/router'
import FooterOverlay from './FooterOverlay'
import { Link } from '@reach/router'


const Footer = () => {

    const location = useLocation();

    const footer = css`
        display: ${location.pathname === "/fejl" ? "none" : "block"};
    `

    const logo = css`
        width: 62em;
        margin: 0 auto;
        padding: 2em 0;
        position: relative;
    `

    const greyBG = css`
        background-color: #F8F8FB;
    `

    return (
        <footer css={footer}>
            <div css={greyBG}>
                <figure css={logo}>
                    <Link to="/">
                        <img src="./images/logo.png" alt="Logo" />
                    </Link>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
                    </p>
                    <QuickLinks />
                    <FooterOverlay />
                </figure>
            </div>
            <DmsLayout />
        </footer>
    );
}
 
export default Footer;