/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



const AboutSale = () => {

    const sales = css`
        display: flex;
        justify-content: space-between;
        margin-top: 2em;
        align-items: center;
        & h4 {
            color: #2A2C30;
        }
    `

    const saleIcons = css`
        margin-right: 1em;
    `

    const background = css`
        position: absolute;
    `

    const icon = css`
        position: relative;
        margin: 0.9em;
    `

    return (
        <section css={sales}>
            <article css={sales}>
                <div css={saleIcons}>
                    <img css={background} src="./images/palesquare.png" alt="Icon background" />
                    <img css={icon} src="./images/soldhouse.png" alt="Houses sold" />
                </div>
                <article>
                    <h4>4829</h4>
                    <p>boliger solgt</p>
                </article>
            </article>
            <article css={sales}>
                <div css={saleIcons}>
                    <img css={background} src="./images/palesquare.png" alt="Icon background" />
                    <img css={icon} src="./images/forsale.png" alt="Houses for sale" />
                </div>
                <article>
                    <h4>158</h4>
                    <p>boliger til salg</p>
                </article>
            </article>
        </section>
    );
}
 
export default AboutSale;