/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ThreeAgents from './ThreeAgents';
import { Link } from '@reach/router'



const MeetUs = () => {

    const meetSection = css`
        padding-top: 2em;
    `

    const meetText = css`
        text-align: center;
        margin: 1em auto;
        color: #263048;
        width: 34.4375em;
    `

    const link = css`
        text-align: center;
        text-decoration: none;
        display: flex;
        justify-content: space-around;
        margin: 0 auto 5em;
    `

    const linkText = css`
        width: 8em;
        color: white;
        background-color: #162A41;
        padding: 0.7em;
    `

    return (
        <section css={meetSection}>
            <h2 css={meetText}>Mød vores engagerede medarbejdere</h2>
            <p css={meetText}>
                Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.
            </p>
            <ThreeAgents />
            <Link to={"/medarbejdere"} css={link}>
                <p css={linkText}>Se alle mæglerne</p>
            </Link>
        </section>
    );
}
 
export default MeetUs;