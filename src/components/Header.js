/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FaPaperPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import LoginIcon from './LoginIcon';


const Header = () => {

    const style = css`
        background-color: #162A41;
        color: white;
        width: 100%;
        height: 3.875em;
        margin: 0;
    `

    const info = css`
        width: 62em;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        justify-content: space-between;
    `

    const contact = css`
        display: flex;
        justify-content: space-between;
        width: 20em;
    `

    return (
        <header css={style}>
            <div css={info}>
                <span css={contact}>
                    <p>
                       <FaPaperPlane />
                        4000@dinmaegler.com 
                    </p>
                    <p>
                       <BsFillTelephoneFill />
                        +45 7070 4000 
                    </p>
                </span>
                <LoginIcon />
            </div>
        </header>
    );
}
 
export default Header;