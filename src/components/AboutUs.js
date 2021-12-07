/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import AboutGrid from './AboutGrid'
import AboutSale from './AboutSale'


const AboutUs = () => {

    const aboutSection = css`
        width: 62em;
        display: flex;
        margin-left: auto;
        margin-right: auto;
    `

    const topSection = css`
        display: flex;
        border-bottom: solid 0.5px #D3DEE8;
    `

    const item = css`
        padding: 6em 1em 3em;
        color: #333333;
        & h2 {
            font-size: 2.375em;
            color: #263048;
        }
        & h3 {
            color: #162A41;
        }
    `

    return (
        <>
            <section css={aboutSection}>
                <article css={topSection}>
                    <img src="../images/family.png" alt="En familie på tre" css={item} />
                    <div css={item}>
                        <h2>Vi har fulgt danskerne hjem i snart 4 årtier</h2>
                        <h3>Det synes vi siger noget om os</h3>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                        <AboutSale />
                    </div>
                </article>
            </section>
            <AboutGrid />
        </>
    );
}
 
export default AboutUs;