/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



const DmsLayout = () => {

    const opgave = css`
        width: 100%;
        color: white;
        background-color: #162A41;
        height: 3.875rem;
        text-align: center;
        margin: 0;
    `

    const layout = css`
        position: relative;
        top: 30%;
    `

    const dms = css`
        width: 62em;
        margin-left: auto;
        margin-right: auto;
        padding: 2em 0;
    `

    const dmsText = css`
        padding: 0;
        margin-left: 55%;
        margin-top: 0;
        margin-bottom: 0;
    `

    return (
        <>
            <div css={dms}>
                <p css={dmsText}>Medlem af</p>
                <h2 css={dmsText}>DMS</h2>
                <p css={dmsText}>Dansk Mægler Sammenslutning</p>
            </div>
            <div css={opgave}>
                <p css={layout}>Layout By Jit Banik 2020</p>
            </div>
        </>
    );
}
 
export default DmsLayout;