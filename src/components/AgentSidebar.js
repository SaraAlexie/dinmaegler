/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



const AgentSidebar = () => {

    const sidebar = css`
        margin-left: 1em;
    `

    const searchDiv = css`
        padding: 1em;
        background-color: #D3DEE8;
    `

    const searchHead = css`
        border-bottom: solid 1px #7B7B7B;
        padding-bottom: 0.7em;
    `

    const inputSearch = css`
        height: 2.375em;
    `

    const property = css`
        margin-top: 1rem;
        color: white;
        margin-left: 0;
        background-color: #162A41;
        padding: 3em;
        text-align: center;
    `

    return (
        <aside css={sidebar}>
            <div css={searchDiv}>
                <h3 css={searchHead}>Søg bolig</h3>
                <input css={inputSearch} type="search" placeholder="Søg bolig..." />
            </div>
            <div css={property}>
                <h2>
                    Find The Best Property
                    For Rent Or Buy
                </h2>
                <p>Call Us Now</p>
                <h2>+00 123 456 789</h2>
            </div>
        </aside>
    );
}
 
export default AgentSidebar;