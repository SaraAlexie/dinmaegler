/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import useAxios from "../customhooks/useAxios";
import { useEffect, useState } from "react";
import HouseCard from "../components/HouseCard";
import Spinner from "../components/Spinner"
import { useLocation } from '@reach/router';


const ForSale = () => {

    const search = useLocation().search
    const searchTerm = new URLSearchParams(search).get('search')
    const url = "https://dinmaegler.herokuapp.com/homes";
    const { data, isLoading, error } = useAxios(url);
    const [filtered, setFiltered] = useState();

    useEffect(() => {
        if (searchTerm && !isLoading) {
            let searchHouse = data.filter(house => {
                return (
                    house.adress1.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    house.agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    house.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    house.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    house.type.toLowerCase().includes(searchTerm.toLowerCase())
                )
            })
            setFiltered(searchHouse)
        }
    }, [data, searchTerm, isLoading]);

    //console.log(filtered);

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

    return isLoading ? <Spinner /> : (  
        <ul css={houseList}>
            {filtered ? filtered.map(house => (
                <HouseCard 
                    id={house.id}
                    key={house.id}
                    adress1={house.adress1}
                    adress2={house.adress2}
                    city={house.city}
                    img={house.images[0].url}
                    type={house.type}
                    netto={house.netto.toLocaleString()}
                    energy={house.energylabel}
                    rooms={house.rooms}
                    size={house.livingspace}
                    price={house.price.toLocaleString()}
            />
            )) : data?.map((house) => (
                    <HouseCard 
                        id={house.id}
                        key={house.id}
                        adress1={house.adress1}
                        adress2={house.adress2}
                        city={house.city}
                        img={house.images[0].url}
                        type={house.type}
                        netto={house.netto.toLocaleString()}
                        energy={house.energylabel}
                        rooms={house.rooms}
                        size={house.livingspace}
                        price={house.price.toLocaleString()}
                    />
                ))}
        </ul>
    );
}
 
export default ForSale;