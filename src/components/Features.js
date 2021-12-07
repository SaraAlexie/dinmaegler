/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import RandomHouses from './RandomHouses';
import { Link } from '@reach/router'


const Features = () => {

    const section = css`
        background-color: #F8F8FB;
        padding-top: 5em;
    `

    const headline = css`
        margin: 2rem auto 0;
        width: 40rem;
        text-align: center;
        font-size: 2.375rem;
        color: #263048;
    `

    const paragraph = css`
        margin: 1em auto 4em;
        width: 40rem;
        text-align: center;
    `

    const link = css`
        text-align: center;
        text-decoration: none;
        display: flex;
        justify-content: space-around;
    `

    const linkBtn = css`
        width: 11.125em;
        height: 3.875em;
        color: white;
        background-color: #162A41;
        padding: 0.7em;
        border: none;
        font-size: 1.125em;
        margin-bottom: 5em;
    `

    return (
        <section css={section}>
            <h2 css={headline}>Udvalgte Boliger</h2>
            <p css={paragraph}>
                There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some.
            </p>
            <RandomHouses />
            <Link to={"/properties"} css={link}>
                <button css={linkBtn}>
                    Se alle boliger
                </button>
            </Link>
        </section>
    );
}
 
export default Features;  