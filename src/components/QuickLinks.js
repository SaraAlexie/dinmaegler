/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from '@reach/router'


const QuickLinks = () => {

    const quick = css`
        margin-left: 55%;
        display: flex;
        flex-direction: column;
        padding: 2em 0;
    `

    const link = css`
        text-decoration: none;
        color: black;
        margin-top: 1em;
    `

    return (
        <div css={quick}>
            <h4>Quick Links</h4>
            <Link to={"/properties/"} css={link}>Boliger til salg</Link>
            <Link to={"/medarbejdere/"} css={link}>Mæglere</Link>
            <Link to={"/kontakt/"} css={link}>Kontakt os</Link>
            <Link to={"/login/"} css={link}>Log ind/Bliv bruger</Link>
        </div>
    );
}
 
export default QuickLinks;