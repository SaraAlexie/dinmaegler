/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



const Newsletter = () => {

    const news = css`
        height: 17em;
        background-image: url("../images/giant-building.png");
        background-size: cover;
        position: relative;
    `

    const content = css`
        display: flex;
        width: 62em;
        left: 0;
        right: 0;
        margin: auto;
        justify-content: space-between;
        padding-top: 6em;
        position: absolute;
        z-index: 10;
    `

    const text = css`
        color: white;
        padding-left: 2em;
    `

    const input = css`
        height: 4em;
        width: 33.75em;
        padding-left: 1em;
    `

    const overlay = css`
        background-color: black;
        opacity: 0.5;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
    `

    return (
        <section css={news}>
            <article css={content}>
                <h3 css={text}>Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</h3>
                <input css={input} type="email" name="email" id="email" placeholder="Indtast din email adresse" />
            </article>
            <div css={overlay}></div>
        </section>
    );
}
 
export default Newsletter;