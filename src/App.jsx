import './App.css';
import { useState, useCallback } from 'react';
import useFetch from "../src/Hooks/useFetch";
import BlogList from './Components/BlogList';
import Create from './Components/Create';
import React from "react";

function App() {
  const {data, setData} = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [search, setSearch] = useState('');
  const [create, setCreate] = useState(null);
const showCreate = useCallback(() => {
  setCreate(true)
}, [setCreate])
const hideCreate = useCallback(() => {
  setCreate(null)
}, [setCreate])


  return (
    <div className="App">
        <div className="addAndCreate">
        <button onClick={showCreate}>Add Post</button>
  <input type="text" placeholder='search here !' onChange={event => {setSearch(event.target.value)}}/>
      </div>
      { create && <Create hideCreate={hideCreate} setData={setData}  data={data} /> }
      {data && <BlogList blogs={data} search={search}/>}
      
      
    </div>
  );
}

export default React.memo(App);
