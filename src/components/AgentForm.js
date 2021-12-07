/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



const AgentForm = ({ name }) => {

    const formField = css`
        border: solid 1px #D3DEE8;
        padding: 1em;
    `

    const inputs = css`
        display: flex;
        justify-content: space-between;
    `

    const inputField = css`
        display: block;
        width: 17.1875rem;
        height: 2.5rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    `

    const inputAbout = css`
        width: 100%;
        display: block;
        height: 2.5rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    `

    const inputMsg = css`
        width: 100%;
        display: block;
        height: 15rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    `

    const formBtn = css`
        height: 62px;
        width: 168px;
        background-color: #162A41;
        color: white;
        border: #162A41;
        margin-top: 2em;
    `

    return (
        <form css={formField}>
            <h3>Kontakt {name}</h3>
            <div css={inputs}>
                <section>
                    <label htmlFor="navn">Navn</label>
                    <input css={inputField} type="text" placeholder="Indtast navn" />
                </section>
                <section>
                    <label htmlFor="email">E-mail</label>
                    <input css={inputField} type="email" name="email" placeholder="Intast e-mail" />
                </section>
            </div>
            <label htmlFor="emne">Emne</label>
            <input css={inputAbout} type="text" placeholder="Hvad drejer din henvendelse sig om?" />
            <label htmlFor="besked">Besked</label>
            <input css={inputMsg} type="text" placeholder="Skriv din besked her..." />
            <button css={formBtn}>
                Send besked
            </button>
        </form>
    );
}
 
export default AgentForm;