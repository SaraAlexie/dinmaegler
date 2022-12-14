/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



const ErrorFooter = () => {

    const footer = css`
        background-color: #25517A;
        margin: 0;
        padding: 0;
    `

    const footSect = css`
        width: 47.5em;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2em;
    `

    const phImg = css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.2em;
    `

    return (
        <footer css={footer}>
            <section css={footSect}>
                <article>
                    <h3>Ghor Bari</h3>
                    <p>
                        There are many variations of passages Lorem Ipsum available, but the majority is have suffered alteration.
                    </p>
                </article>
                <article>
                    <h3>Important links</h3>
                    <p>Important link</p>
                    <p>Important link</p>
                    <p>Important link</p>
                    <p>Important link</p>
                    <p>Important link</p>
                </article>
                <article>
                    <h3>Follow Instagram</h3>
                    <section css={phImg}>
                        <img src="https://via.placeholder.com/60" alt="Placeholder" />
                        <img src="https://via.placeholder.com/60" alt="Placeholder" />
                        <img src="https://via.placeholder.com/60" alt="Placeholder" />
                        <img src="https://via.placeholder.com/60" alt="Placeholder" />
                        <img src="https://via.placeholder.com/60" alt="Placeholder" />
                        <img src="https://via.placeholder.com/60" alt="Placeholder" />
                    </section>
                </article>
            </section>
        </footer>
    );
}
 
export default ErrorFooter;