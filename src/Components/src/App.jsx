import Navbar from './Components/Navbar';
import Create from './Components/Create'
import { useState, useCallback } from 'react';
import useFetch from "../src/hooks/useFetch";
import BlogList from "../src/Components/BlogList";


function App() {
  
  const{data} = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [create, setCreate] = useState(null);
  const view_create = () => {setCreate(true)}
  const hide_create = () => {setCreate(null)}

   const add_post = (new_Blog) => {data.unshift(new_Blog)}

  return (
      <div className="App">
        <Navbar view_create={view_create} />
        <div className="content">
          { create && <Create hide_create={hide_create} add_post={add_post} /> }
          {data && <BlogList blogs={data}/>}
        </div>
      </div>
  );
}

export default App;
