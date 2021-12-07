/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Banner from "../components/Banner";
import * as Sentry from "@sentry/react";
import ContactForm from '../components/ContactForm';
import ContactSidebar from '../components/ContactSidebar';


const ContactUs = () => {

    const contact = css`
        width: 62em;
        margin: 3em auto;
    `

    const ready = css`
        color: #162A41;
    `

    const mapImg = css`
        margin: 0;
        padding: 0;
    `

    const contactInfo = css`
        display: flex;
        justify-content: space-between;
    `

    return (
        <Sentry.ErrorBoundary>
            <Banner headline="Kontakt os" />
            <main css={contact}>
                <h2 css={ready}>
                    Vi sidder klar til at besvare dine spørgsmål
                </h2>
                <p>
                    Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. 
                    Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.
                </p>
                <div css={contactInfo}>
                    <ContactForm />
                    <ContactSidebar />
                </div>
            </main>
            <img css={mapImg} src="./images/map.png" alt="Kort" />
        </Sentry.ErrorBoundary>
    );
}
 
export default ContactUs;