import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import Hero from "../components/Hero";
import MeetUs from "../components/MeetUs";
import Newsletter from "../components/Newsletter";
import UpdateApp from "../components/UpdateApp";
import * as Sentry from "@sentry/react";
import CookieConsent from "react-cookie-consent";


const Home = () => {

    return (
        <Sentry.ErrorBoundary>
            <Hero />
            <AboutUs />
            <Features />
            <Newsletter />
            <MeetUs />
            <UpdateApp />
            <CookieConsent
                style={{color: "white", backgroundColor: "#162A41", textAlign: "center"}}
                buttonText="Ok, tak!"
                buttonStyle={{color: "#162A41", backgroundColor: "white"}}
                expires={30}
            >
                Denne side bruger cookies til at forbedre brugeroplevelsen
            </CookieConsent>
        </Sentry.ErrorBoundary>
    );
}
 
export default Home;