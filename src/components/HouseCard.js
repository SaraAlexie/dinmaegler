/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from '@reach/router'
import FavIcon from './FavIcon'
import { useContext } from 'react'
import { TokenContext } from '../contexts/TokenContext'



const HouseCard = ({ adress1, adress2, img, postal, city, id, type, netto, energy, rooms, size, price }) => {

    const { favIds } = useContext(TokenContext)

    const houseCard = css`
        display: flex;
        position: relative;
        background-color: white;
        box-shadow: 0px 10px 30px rgba(0, 115, 225, 0.06);
        border-radius: 4px;
    `

    const link = css`
        text-decoration: none;
        color: black;
    `

    const houseInfo = css`
        border-bottom: solid 1px #D3DEE8;
    `

    const adress = css`
        display: flex;
        align-items: center;
        white-space: break-spaces;
        padding: 0 1rem;
    `

    const houseImg = css`
        max-width: 100%;
    `

    const bottomSec = css`
        justify-content: space-between;
        display: flex;
        align-items: center;
        white-space: break-spaces;
        padding-right: 1em;
    `

    return (
        <div css={houseCard}>
            <FavIcon id={id} isFav={favIds.includes(id)}/>
            <Link to={`/details/${id}`} css={link} key={id}>
                <li>
                    <section css={houseInfo}>
                        <img src={img} alt="Udvalgte bolig" css={houseImg} />
                        <article  css={adress}>
                            <h3>{adress1} </h3>
                            {adress2 ? <h3> • {adress2}</h3> : <span />}
                        </article>
                        <p css={adress}>{postal} {city}</p>
                        <article css={adress}>
                            <h3>{type} • </h3>
                            <p>Ejerudgift: {netto} kr.</p>
                        </article>
                    </section>
                    <section css={bottomSec}>
                        <article css={adress}>
                            <p>{energy} </p>
                            <p> {rooms} værelser • {size} m²</p>
                        </article>
                        <h3>Kr. {price}</h3>
                    </section>
                </li>
            </Link>
        </div>
    );
}
 
export default HouseCard;

// {"•" + adress2}