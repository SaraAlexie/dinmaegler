/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BsTelephone } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { GoLocation } from "react-icons/go";


const FooterOverlay = () => {

    const overlay = css`
        background-color: white;
        box-shadow: 0px 10px 30px rgba(0, 115, 225, 0.06);
        border-radius: 4px;
        width: 27.75em;
        position: absolute;
        left: 0;
        right: 0;
        padding: 1em 0 1em 2em;
        top: 46%;
    `

    const overItem = css`
        display: flex;
        align-items: center;
    `

    const overIcon = css`
        border-radius: 50%;
        color: white;
        background-color: #162A41;
        height: 2.5em;
        width: 2.5em;
        padding: 0.7em;
        margin-right: 1em;
    `

    const overText = css`
        width: 14em;
        margin-bottom: 0;
        padding-bottom: 0;
    `

    return (
        <div css={overlay}>
            <div css={overItem}>
                <BsTelephone css={overIcon} />
                <section>
                    <p>Ring til os</p>
                    <h4>+45 7070 4000</h4>
                </section>
            </div>
            <div css={overItem}>
                <IoMdPaperPlane css={overIcon} />
                <section>
                    <p>Send en mail</p>
                    <h4>4000@dinmaegler.com</h4>
                </section>
            </div>
            <div css={overItem}>
                <GoLocation css={overIcon} />
                <section>
                   <p>Butik</p>
                    <h4>Stændertorvet 78, 4000 Roskilde</h4> 
                </section>
            </div>
            <p css={overText}>
                Din Mægler Roskilde, er din boligibutik i lokalområdet.
            </p>
        </div>
    );
}
 
export default FooterOverlay;