import Banner from "../components/Banner";
import ForSale from "../components/ForSale"
import * as Sentry from "@sentry/react";


const PropertyList = () => {
    return (
        <Sentry.ErrorBoundary>
            <Banner headline="Boliger til salg" />
            <ForSale />
        </Sentry.ErrorBoundary>
    );
}
 
export default PropertyList;