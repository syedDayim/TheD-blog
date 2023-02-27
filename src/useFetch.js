import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setdata] = useState(null);    
    const [isPending, setIsPending] = useState(true);  
    const [error, setError] = useState(null);
    // Fetching blogs from Json database using useEffect()
    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("Couldn't find the resoures")
                }
                return res.json();
            })
            .then(data => {
                setdata(data);
                setIsPending(false);
                setError(null);
            })   

            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, [])


    return { data, isPending, error}

}
export default useFetch;