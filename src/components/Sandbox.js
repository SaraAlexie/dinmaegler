/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const Sandbox = () => {

    const heroImg = css`
        width: 100%;
        height: 53.125em;
        color: white;
        background-image: url("../images/hero.png");
        background-size: cover;
        position: relative;
    `

    const headText = css`
        position: absolute;
        z-index: 10;
        text-align: center;
        top: 25%;
        left: 45%;
    `

    const overlay = css`
        background-color: black;
        opacity: 0.5;
        height: 100%;
        width: 100%;
        position: absolute;
    `

    return (
        <div css={heroImg}>
            <h1 css={headText}>Søg efter din drømmebolig</h1>
            <div css={overlay}></div>
        </div>
    );
}
 
export default Sandbox;