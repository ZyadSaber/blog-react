import { useState, useEffect } from "react";
// import useFetch from "../Hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        fetch ('https://jsonplaceholder.typicode.com/posts') 
        .then(res => {
           if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
        })
        .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
        })
        .catch(err => {
        setIsPending(false);
        setError(err.message);
        })
      }, []);
    
    return ( 
        <div className="home">
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div>}
          {data && <BlogList blogs={data}/>}
        </div>
     );
}
 
export default Home;