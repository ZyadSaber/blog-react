import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const detData=async(link)=>{
    const response=await fetch(link);
    const blogData=await response.json();
    // const newBlog = {"body": "aa", "id":101, "title":101, "userId": 1}
    setData(blogData)
    // setData(...data, newBlog)
  }

    useEffect(() => {
      detData(url)
      }, [url]);



      return{data, setData}
}

export default useFetch