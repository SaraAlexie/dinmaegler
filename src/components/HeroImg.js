/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const HeroImg = () => {

    const heroImg = css`
        width: 100%;
        height: 53.125em;
        background-image: url("../images/hero.png");
        background-size: cover;
        position: relative;
    `

    const headText = css`
        position: absolute;
        z-index: 10;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        top: 20%;
        color: white;
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
 
export default HeroImg;