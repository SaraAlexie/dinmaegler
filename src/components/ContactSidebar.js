/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BsTelephone } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { GoLocation } from "react-icons/go";



const ContactSidebar = () => {

    const sideBar = css`
        width: 20em;
        border: solid 1px #D3DEE8;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
    `

    const contactBox = css`
        text-align: center;
        padding: 1em 0 0.5em;
        border-bottom: solid 1px #D3DEE8;
    `

    const contactIcon = css`
        border-radius: 50%;
        color: white;
        background-color: #162A41;
        height: 1em;
        width: 1em;
        padding: 0.7em;
        margin-right: 1em;
    `

    return (
        <aside css={sideBar}>
            <div css={contactBox}>
                <BsTelephone css={contactIcon} />
                <h4>Ring til os</h4>
                <p>+45 7070 4000</p>
            </div>
            <div css={contactBox}>
                <IoMdPaperPlane css={contactIcon} />
                <h4>Send en mail</h4>
                <p>4000@dinmaegler.dk</p>
            </div>
            <div css={contactBox}>
                <GoLocation css={contactIcon} />
                <h4>Besøg butikken</h4>
                <p>Stændertorvet 78,</p>
                <p>4000 Roskilde</p>
            </div>
        </aside>
    );
}
 
export default ContactSidebar;