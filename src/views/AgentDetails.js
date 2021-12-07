/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import useAxios from "../customhooks/useAxios";
import { useEffect } from "react";
import Spinner from "../components/Spinner"
import * as Sentry from "@sentry/react";
import AgentDescription from '../components/AgentDescription';
import AgentSidebar from '../components/AgentSidebar';
import AgentForm from '../components/AgentForm';


const AgentDetails = ({ id }) => {

    const url = `https://dinmaegler.herokuapp.com/agents/${id}`
    const { data, isLoading, error } = useAxios(url);

    useEffect(() => {
        if (error) throw new Error(error);
    }, [error])

    const info = css`
        width: 62em;
        margin: 1em auto;
        display: flex;
    `

    const agent = css`
        border: solid 1px #D3DEE8;
        padding: 1em;
        width: 45.625em;
    `

    return isLoading ? <Spinner /> : (
        <Sentry.ErrorBoundary>
            <main css={info}>
                <section css={agent}>
                    <AgentDescription
                        image={data.image.url}
                        name={data.name}
                        title={data.title}
                        email={data.email}
                    />
                    <article>
                        <h3>Om {data.name}</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form, by injected humour, 
                            or randomised words which don't look even slightly believable.
                        </p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form by injected humour.
                        </p>
                    </article>
                    <AgentForm 
                        name={data.name}
                    />
                </section>
                <AgentSidebar />
            </main>
        </Sentry.ErrorBoundary>
     );
}
 
export default AgentDetails;