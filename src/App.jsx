import './App.css';
import { useState, useCallback } from 'react';
import useFetch from "../src/Hooks/useFetch";
import BlogList from './Components/BlogList';
import Create from './Components/Create';
// import {useMemo} from 'react'

function App() {
  const{data} = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [search, setSearch] = useState('');
  const [create, setCreate] = useState(null);
  const addPost = (newBlog) => {
    data.unshift(newBlog)
  };
const showCreate = useCallback(() => {
  setCreate(true)
}, [setCreate])


  return (
    <div className="App">
        <div className="addAndCreate">
        <button onClick={showCreate}>Add Post</button>
  <input type="text" placeholder='search here !' onChange={event => {setSearch(event.target.value)}}/>
      </div>
      { create && <Create setCreate={() => {setCreate(null)}} addPost={addPost} /> }
      {data && <BlogList blogs={data} search={search}/>}
    </div>
  );
}

export default App;
