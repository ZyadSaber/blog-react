import './App.css';
import { useState, useCallback } from 'react';
import useFetch from "../src/Hooks/useFetch";
import BlogList from './Components/BlogList';
import Create from './Components/Create';

function App() {
  const{data} = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [search, setSearch] = useState('')
  const [create, setCreate] = useState(null);
  const add_post = (new_Blog) => {
    data.unshift(new_Blog)
  }


  return (
    <div className="App">
        <div className="addAndCreate">
        <button onClick={() => {setCreate(true)}}>Add Post</button>
        <input type="text" placeholder='search here !' onChange={event => {setSearch(event.target.value);}}/>
      </div>
      { create && <Create setCreate={setCreate} add_post={add_post} /> }
      {data && <BlogList blogs={data} search={search}/>}
    </div>
  );
}

export default App;
