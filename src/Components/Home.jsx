// import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = ({handle_create}) => {
   
    const{data, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts')

    return ( 
        <div className="home">
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div>}
          {data && <BlogList blogs={data} handle_create={handle_create}/>}
        </div>
     );
}
 
export default Home;