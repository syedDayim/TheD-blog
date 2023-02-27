import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setdata] = useState(null);    
    const [isPending, setIsPending] = useState(true);  
    const [error, setError] = useState(null);


    // Fetching blogs from Json database using useEffect()
    useEffect(() => {
        fetch(url) // fetches the blog and returns a promise

            // catching the promise to get the resources
            .then(res => {  
                if(!res.ok){ // cheching if the resource is not available and throws an error 
                    throw Error("Couldn't find the resoures")
                }
                return res.json(); // returns the resource and also a promise
            })

            // catch the promise to get the data 
            .then(data => {
                setdata(data);
                setIsPending(false);
                setError(null);
            })   

            //catching all the errors
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, [])


    return { data, isPending, error} // returning the states

}
export default useFetch; // exporting the custom hook