/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import useAxios from '../customhooks/useAxios';
import { useEffect } from "react";
import HouseCard from './HouseCard';
import Spinner from "../components/Spinner"


const RandomHouses = () => {

    const url = "https://dinmaegler.herokuapp.com/homes?_limit=4";
    const { data, isLoading, error } = useAxios(url);

    //console.log(data);

    useEffect(() => {
        if (error) throw new Error(error);
    }, [error])

    const houseList = css`
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2em;
        width: 62em;
        margin: 1em auto;
    `

    return isLoading ? <Spinner /> :  (
        <ul css={houseList}>
            {data?.map((house) => (
                <HouseCard 
                    id={house.id}
                    key={house.id}
                    adress1={house.adress1}
                    adress2={house.adress2}
                    postal={house.postalcode}
                    city={house.city}
                    img={house.images[0].url}
                    type={house.type}
                    netto={house.netto}
                    energy={house.energylabel}
                    rooms={house.rooms}
                    size={house.livingspace}
                    price={house.price.toLocaleString()}
                />
            ))}
        </ul>
    );
}
 
export default RandomHouses;