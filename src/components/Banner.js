/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



const Banner = ({ headline }) => {

    const banner = css`
        width: 100%;
        color: white;
        background-image: url("../images/giant-building.png");
        background-size: cover;
        height: 12.0625em;
        position: relative;
    `

    const overlay = css`
        background-color: black;
        opacity: 0.5;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
    `

    const headText = css`
        position: absolute;
        z-index: 10;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        top: 15%;
    `

    return (
        <>
            <div css={banner}>
                <h1 css={headText}>{headline}</h1>
                <div css={overlay}></div>
            </div>
        </>
    );
}
 
export default Banner;