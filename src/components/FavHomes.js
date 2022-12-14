/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";


const FavHomes = () => {

    const { favourites, handleFavourites } = useContext(TokenContext);

    const homeList = css`
        list-style: none;
        width: 62em;
        margin: 2em auto 0;
    `

    const listItem = css`
        border: solid 1px #D5E0EA;
        padding: 2em;
        margin-bottom: 2em;
        display: grid;
        grid-template-columns: repeat(3, 35% 27% 38%);
    `

    const homeImg = css`
        width: 17.625em;
        height: 8.5625em;
        grid-row-start: 1;
        grid-row-end: 3;
    `

    const homeInfo = css`
        grid-row-start: 1;
        grid-row-end: 3;
    `

    const flexSec = css`
        display: flex;
        margin-inline-start: auto;
    `

    const marginItem = css`
        margin-left: 1.5em;
    `

    const btn = css`
        color: white;
        background-color: #162A41;
        width: 13.125em;
        height: 3.875em;
        border: #162A41;
        grid-column-start: 3;
        justify-self: self-end;
        align-self: self-end;
    `

    return (
        <ul css={homeList}>
            {favourites?.map((home) => (
                <li css={listItem} key={home.id}>
                    <img css={homeImg} src={home.images[0].url} alt="Hus" />
                    <section css={homeInfo}>
                        <h2>{home.adress1}</h2>
                        <p>{home.adress2}</p>
                        <p>{home.type} • Ejerudgift: {home.cost} Kr.</p>
                    </section>
                    <section css={flexSec}>
                        <p css={marginItem}>{home.energylabel}</p>
                        <p css={marginItem}>{home.rooms} værelser • {home.livingspace} m²</p>
                        <p css={marginItem}>{home.price} Kr.</p>
                    </section>
                    <button css={btn} onClick={() => handleFavourites(home.id)}>
                        Fjern fra favoritter
                    </button>
                </li>
            ))}
        </ul>
    );
}
 
export default FavHomes;