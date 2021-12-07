/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



const Description = ({ description, img, name, title, phone, email }) => {

    const descriptSec = css`
        display: flex;
        width: 62em;
        margin: 2em auto;
        justify-content: space-between;
    `

    const articleDes = css`
        padding-right: 3em;
    `

    const agent = css`
        border: solid 1px #D3DEE8;
        padding: 2rem;
        display: flex;
    `

    const agentImg = css`
        width: 17.5rem;
    `

    const agentDes = css`
        margin: 2.5rem 0 0 1em;
    `

    return ( 
        <section css={descriptSec}>
            <article css={articleDes}>
                <h3>Beskrivelse</h3>
                <p>{description}</p>
            </article>
            <article css={agent}>
                <section>
                    <h3>Ansvarlig mægler</h3>
                    <img css={agentImg} src={img} alt="Agent" />
                </section>
                <article css={agentDes}>
                    <h3>{name}</h3>
                    <p>{title}</p>
                    <p>{phone}</p>
                    <p>{email}</p>
                </article>
            </article>
        </section>
     );
}
 
export default Description;