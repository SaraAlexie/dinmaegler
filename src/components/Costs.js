/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



const Costs = ({ adress1, adress2, price }) => {

    const costs = css`
        width: 62em;
        margin: 2em auto;
        border-bottom: solid 1px #D3DEE8;
    `

    const header = css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    `

    return (
        <section css={costs}>
            <article css={header}>
                <div>
                    <p>{adress1}</p>
                    <p>{adress2}</p>
                </div>
                <p>ICONS</p>
                <p>Kr. {price}</p>
            </article>
        </section>
    );
}
 
export default Costs;