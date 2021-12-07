/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ErrorFooter from '../components/ErrorFooter'
import ErrorMessage from '../components/ErrorMessage'


const ErrorPage = () => {

    const bgColor = css`
        background-color: #EEF7FF;
        z-index: -2;
        height: 100%;
        width: 100%;
        padding-bottom: 5em;
    `

    const errorContent = css`
        width: 33.75em;
        margin-left: auto;
        margin-right: auto;
        padding-top: 5em;
        position: relative;
        z-index: 10;
    `

    const errorImg = css`
        display: block;
        margin-left: auto;
        margin-right: auto;
    `

    const blueRectangle = css`
        display: block;
        margin-left: auto;
        margin-right: auto;
        top: 15em;
        position: absolute;
        top: 74%;
        left: 9.5%;
        z-index: -1;
    `

    return (
        <>
            <section css={bgColor}>
                <section>
                    <section css={errorContent}>
                        <img css={errorImg} src="./images/hov.png" alt="Siden findes ikke" />
                        <img css={blueRectangle} src="./images/bluerectangle.png" alt="Siden findes ikke" />
                    </section>
                </section>
                <ErrorMessage />
            </section>
            <ErrorFooter />
        </>
    );
}
 
export default ErrorPage;