import './App.css';
import { useState, useCallback } from 'react';
import useFetch from "../src/Hooks/useFetch";
import BlogList from './Components/BlogList';
import Create from './Components/Create';

function App() {
  const{data} = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [change, setChange] = useState({
        search: '',
        create: null,
})
  // const [search, setSearch] = useState('')
  // const [create, setCreate] = useState(null);
  const add_post = (new_Blog) => {
    data.unshift(new_Blog)
  }
//setChange({search: event.target.value})

  return (
    <div className="App">
        <div className="addAndCreate">
        <button onClick={() => {setChange({...change, create: true})}}>Add Post</button>
        <input type="text" placeholder='search here !' onChange={event => {setChange({search: event.target.value})}}/>
      </div>
      { change.create && <Create setCreate={() => {setChange({...change, create: null})}} add_post={add_post} /> }
      {data && <BlogList blogs={data} search={change.search}/>}
    </div>
  );
}

export default App;
