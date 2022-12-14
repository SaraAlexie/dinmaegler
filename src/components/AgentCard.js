/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from '@reach/router';
import { FaEnvelope } from 'react-icons/fa'


const AgentCard = ({ img, name, title, id }) => {

    const link = css`
        text-decoration: none;
        color: black;
    `

    const listItem = css`
        border: 1px solid #D3DEE8;
        box-shadow: 0px 10px 30px rgba(0, 115, 225, 0.06);
        border-radius: 4px;
    `

    const agentImg = css`
        height: 14em;
        width: 100%;
    `

    const agentInfo = css`
        text-align: center;
        color: #2A2C30;
    `

    return (
        <Link to={`/medarbejderinfo/${id}`} css={link} key={id}>
            <li css={listItem}>
                <img src={img} alt="Mægler" css={agentImg} />
                <article css={agentInfo}>
                    <h3>{name}</h3>
                    <p>{title}</p>
                    <h3>
                        <FaEnvelope /> in
                    </h3>
                </article>
            </li>
        </Link>
    );
}
 
export default AgentCard;