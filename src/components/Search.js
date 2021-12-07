/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const Search = () => {

    const search = css`
        height: 12.625em;
        width: 56.25em;
        background-color: white;
        position: absolute;
        top: 65%;
        left: 0%;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        padding: 2em;
    `

    const headline = css`
        margin: 0.5em 0;
    `

    const underLine = css`
        width: 2.6875em;
        height: 0.25em;
        background-color: #162A41;
    `

    const searchForm = css`
        margin-top: 3em;
    `

    const input = css`
        width: 45.5rem;
        height: 3rem;
        margin-right: 1em;
    `

    const searchBtn = css`
        width: 7.5rem;
        height: 3rem;
        color: white;
        background: #162A41;
        border: none;
    `

    return (
        <div css={search}>
            <h2 css={headline}>Søg blandt 158 boliger til salg i 74 butikker</h2>
            <div css={underLine} />
            <form action="/properties" css={searchForm}>
                <p>Hvad skal din næste bolig indeholde?</p>
                <input type="search" name="search" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" css={input} />
                <button type="submit" css={searchBtn}>Søg</button>
            </form>
        </div>
    );
}
 
export default Search;