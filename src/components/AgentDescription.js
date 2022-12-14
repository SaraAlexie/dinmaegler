/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaPaperPlane } from 'react-icons/fa';


const AgentDescription = ({ image, name, title, email}) => {

    const agentInfo = css`
        margin: 0;
        padding: 0;
        display: flex;
    `

    const agentImg = css`
        height: 17.5em;
    `

    const infoText = css`
        margin-left: 1em;
    `

    const contact = css`
        display: flex;
        align-items: center;
    `

    return (
        <figure css={agentInfo}>
            <img src={image} alt="Ejendomsmægler" css={agentImg} />
            <section css={infoText}>
                <h2>{name}</h2>
                <p>{title}</p>
                <section css={contact}>
                    <BsFillTelephoneFill />
                    <p>+45 7070 4012</p>
                </section>
                <section css={contact}>
                    <FaPaperPlane />
                    <p>{email}</p>
                </section>
            </section>
        </figure>
    );
}
 
export default AgentDescription;