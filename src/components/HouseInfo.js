/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



const HouseInfo = ({ space, lot, rooms, basement, built, remodel, energy, payment, netto, cost }) => {

    const infoSec = css`
        width: 62em;
        margin: 2em auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    `

    return (
        <section css={infoSec}>
            <article>
                <p>Boligareal: {space} m²</p>
                <p>Grundareal: {lot} m²</p>
                <p>Rum/værelser: {rooms}</p>
            </article>
            <article>
                <p>Kælderareal: {basement} m²</p>
                <p>Byggeår: {built}</p>
                <p>Ombygget: {remodel}</p>
                <p>Energimærke: {energy}</p>
            </article>
            <article>
                <p>Udbetaling: Kr. {payment}</p>
                <p>Netto ex ejerudgift: Kr. {netto}</p>
                <p>Ejerudgift: Kr. {cost}</p>
            </article>
        </section>
    );
}
 
export default HouseInfo;