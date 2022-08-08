import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const get_data=async(link)=>{
    const response=await fetch(link);
    const blog_data=await response.json();
    setData(blog_data)
  }

    useEffect(() => {
      get_data(url)
      }, [url]);

      return{data}
}

export default useFetch