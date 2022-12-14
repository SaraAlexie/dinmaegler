/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import useAxios from '../customhooks/useAxios';
import { useEffect } from 'react'
import AgentCard from './AgentCard';
import Spinner from "../components/Spinner"


const ThreeAgents = () => {

    const url = "https://dinmaegler.herokuapp.com/agents/?_limit=3";
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
        grid-column-gap: 1em;
    `

    return isLoading ? <Spinner /> : (
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
    );
}
 
export default ThreeAgents;