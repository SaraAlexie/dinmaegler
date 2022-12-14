/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import useAxios from '../customhooks/useAxios';
import { useEffect } from 'react'
import Banner from "../components/Banner";
import AgentCard from '../components/AgentCard';
import Spinner from "../components/Spinner"
import * as Sentry from "@sentry/react";


const Agents = () => {

    const url = "https://dinmaegler.herokuapp.com/agents";
    const { data, isLoading, error } = useAxios(url);

    useEffect(() => {
        if (error) throw new Error(error);
    }, [error])

    const list = css`
        width: 62em;
        margin: 1em auto;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1em;
    `

    return isLoading ? <Spinner /> : (
        <Sentry.ErrorBoundary>
            <Banner headline="Medarbejdere i Roskilde" />
            <ul css={list}>
                {data?.map((agent) => (
                   <AgentCard 
                        key={agent.id}
                        id={agent.id}
                        name={agent.name}
                        title={agent.title}
                        img={agent.image.url}
                    />
                ))}
            </ul>
        </Sentry.ErrorBoundary>
    );
}
 
export default Agents;