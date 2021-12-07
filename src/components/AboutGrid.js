/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";


const AboutGrid = () => {

    const grid = css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 62em;
        margin: 3em auto 0;
        grid-gap: 1.5em;
    `

    const gridItem = css`
        display: flex;
        & h4 {
            color: #2A2C30;
        }
    `

    const background = css`
        position: absolute;
        height: 3.125em;
        width: 3.125em;
    `

    const gridIcon = css`
        font-size: 4em;
        position: relative;
        left: 4%;
        bottom: 5%;
        margin-right: 1rem;
    `

    const gridText = css`
        margin: 0 1em;
    `

    return (
        <article css={grid}>
            <div css={gridItem}>
                <img css={background} src="./images/palesquare.png" alt="Icon background" />
                <FaHandHoldingUsd css={gridIcon}/>
                <div css={gridText}>
                    <h4>Bestil et salgstjek</h4>
                    <p>
                        Med et Din Mægler Salgstjek 
                        bliver du opdateret på værdien 
                        af din bolig.
                    </p>
                </div>
            </div>
            <div css={gridItem}>
                <img css={background} src="./images/palesquare.png" alt="Icon background" />
                <MdLocationOn css={gridIcon}/>
                <div css={gridText}>
                    <h4>74 butikker</h4>
                    <p>
                        Hos Din Mægler er din bolig 
                        til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.
                    </p>
                </div>
            </div>
            <div css={gridItem}>
                <img css={background} src="./images/palesquare.png" alt="Icon background" />
                <GiFamilyHouse css={gridIcon}/>
                <div css={gridText}>
                    <h4>Tilmeld køberkartotek</h4>
                    <p>
                        Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.
                    </p>
                </div>
            </div>
        </article>
    );
}
 
export default AboutGrid;