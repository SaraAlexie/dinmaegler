/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from '@reach/router'


const ErrorMessage = () => {

    const errorHead = css`
        text-align: center;
        margin-top: 3em;
    `

    const errorMsg = css`
        text-align: center;
        width: 28.625em;
        margin: 1em auto;
    `

    const link = css`
        text-decoration: none;
        margin-left: 44%;
        margin-right: 43%;
    `

    const back = css`
        color: white;
        background-color: #162A41;
        width: 13.125em;
        height: 3.875em;
        border: #162A41;
    `

    return (
        <>
            <h2 css={errorHead}>Du er havnet på en side som ikke findes!</h2>
            <p css={errorMsg}>Det er vi kede af! Vi har sendt en besked af sted til vores internetbureau, og bedt dem se på fejlen.</p>
            <Link css={link} to={"/"}>
                <button css={back} type="submit">
                    Tilbage til forsiden
                </button>
            </Link>
        </>
    );
}
 
export default ErrorMessage;