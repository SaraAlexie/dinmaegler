import { useState, useEffect } from "react";
import axios from "axios";


const useAxios = (url) => {

    const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

    useEffect(() => {
        axios(url)   

            .then((result) => {
                if (result.status !== 200) throw new Error("Unable to fetch data from that resource");
                setData(result.data);
                setIsLoading(false);
                setError(null);
            })

            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
            });

    }, [url]);

    return { data, isLoading, error };
}
 
export default useAxios;