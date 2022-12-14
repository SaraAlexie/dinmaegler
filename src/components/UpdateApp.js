/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const UpdateApp = () => {

	const update = css`
		background-color: #162a41;
	`;

    const width = css`
        width: 62em;
        margin-left: auto;
        margin-right: auto;
        display: flex;
    `

    const updateText = css`
        color: white;
        width: 50%;
        padding: 4em 2em 0 0;
    `

    const buttons = css`
        display: flex;
    `

    const btn = css`
        margin-right: 1em;
        border: solid 1px white;
        padding: 1em;
    `

    const images = css`
        display: flex;
        padding: 4em 0 0 2em;
    `

    const phone1 = css`
        position: absolute;
        z-index: 10;
    `

    const phone2 = css`
        position: relative;
        left: 60%;
    `

	return (
		<section css={update}>
            <section css={width}>
                <article css={updateText}>
                    <h3>Hold dig opdateret på salgsprocessen</h3>
                    <p>
                        Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores
                        app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.
                    </p>
                    <div css={buttons}>
                        <p css={btn}>
                            <IoLogoGooglePlaystore />
                            Google Play
                        </p>
                        <p css={btn}>
                            <FaApple />
                            Apple Store
                        </p>
                    </div>
                </article>
                <div css={images}>
                    <img src="./images/phone1.png" alt="Telefon 1" css={phone1} />
                    <img src="./images/phone2.png" alt="Telefon 2" css={phone2} />
                </div>
            </section>
		</section>
	);
};

export default UpdateApp;
