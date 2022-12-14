import useAxios from "../customhooks/useAxios";
import { useEffect } from "react";
import Costs from '../components/Costs';
import HouseInfo from '../components/HouseInfo';
import Description from '../components/Description';
import Spinner from "../components/Spinner"
import * as Sentry from "@sentry/react";
import Slider from '../components/Slider'


const PropertyDetails = ({ id }) => {

    const url = `https://dinmaegler.herokuapp.com/homes/${id}`;
    const { data, isLoading, error } = useAxios(url);

    useEffect(() => {
        if (error) throw new Error(error);
    }, [error])

    console.log(data);

    return isLoading ? <Spinner /> : (
        <Sentry.ErrorBoundary>
            <main>
                <Slider 
                    img1={data.images[0].url}
                    img2={data.images[1].url}
                    img3={data.images[2].url}
                    img4={data.images[3].url}
                    img5={data.floorplan.url}
                />
                <Costs 
                    adress1={data.adress1}
                    adress2={data.adress2}
                    price={data.price.toLocaleString()}
                />
                <HouseInfo 
                    space={data.livingspace}
                    lot={data.lotsize}
                    rooms={data.rooms}
                    basement={data.basementsize}
                    built={data.built}
                    remodel={data.remodel}
                    energy={data.energylabel}
                    payment={data.payment.toLocaleString()}
                    netto={data.netto.toLocaleString()}
                    cost={data.cost.toLocaleString()}
                />
                <Description 
                    description={data.description}
                    img={data.agent.image.url}
                    name={data.agent.name}
                    title={data.agent.title}
                    phone={data.agent.phone}
                    email={data.agent.email}
                />
            </main>
        </Sentry.ErrorBoundary>
    );
}
 
export default PropertyDetails;