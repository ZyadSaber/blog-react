import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
     const [error, setError] = useState(null);

    const get_data=async(link)=>{
    const response=await fetch(link);
    const data=await response.json();
    setData(data)
    setIsPending(false)
    setError(null)
  }

    useEffect(() => {
      get_data(url)
      }, [url]);

      

      return{data, isPending, error}
}

export default useFetch
