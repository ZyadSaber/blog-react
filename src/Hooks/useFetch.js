import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const detData=async(link)=>{
    const response=await fetch(link);
    const blogData=await response.json();
    setData(blogData)
  }

    useEffect(() => {
      detData(url)
      }, [url]);

      return{data}
}

export default useFetch