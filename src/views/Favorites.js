import Banner from "../components/Banner";
import FavHomes from "../components/FavHomes";
import * as Sentry from "@sentry/react";


const Favorites = () => {

    return (
        <>
            <Sentry.ErrorBoundary>
                <Banner headline="Mine farvoritboliger" />
                <FavHomes />
            </Sentry.ErrorBoundary>
        </>
    );
}
 
export default Favorites;