import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const detData=async(link)=>{
    const response=await fetch(link);
    const blogData=await response.json();
    setData(blogData)
  }
    useEffect(() => {
      detData(url)
      }, [url]);
      return{data, setData}
}

export default useFetch